'use strict';
const Q = require('q');
const fs = require('fs');
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const User = require('../models/user');
const File = require('../helpers/file');

module.exports = {
  findAll: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    let query = {};

    if (req.query.filter) {
      query = {
        _id: {
          $in: req.user.following,
        },
      };
    }

    User.find(query)
      .select('username email profile')
      .exec((err, _users) => {
        if (err) return next(err);

        const users = _users.reduce((acc, _user) => {
          const user = _user.toObject();
          user.followed = req.user.following.indexOf(user._id) !== -1;
          return acc.concat(user);
        }, []);

        res.json(users);
      });
  },

  read: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    let query = {
      username: req.params.userId,
    };

    if (mongoose.Types.ObjectId.isValid(req.params.userId)) {
      query = {
        _id: req.params.userId,
      };
    }

    User.findOne(query)
      .select('username email profile')
      .exec((err, user) => {
        if (err) return next(err);

        if (!user) {
          err = new Error('Not Found');
          err.status = 404;
          return next(err);
        }

        return res.json(user);
      });
  },

  update: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    if (req.user._id.toString() !== req.params.userId) {
      const err = new Error('Forbidden');
      err.status = 403;
      return next(err);
    }

    User.findById(req.params.userId)
      .exec((err, _user) => {
        if (err) return next(err);

        if (!_user) {
          err = new Error('Not Found');
          err.status = 404;
          return next(err);
        }

        const deferred = Q.defer();

        if (req.body.profile.avatar !== _user.profile.avatar) {
          if (req.body.profile.avatar) {
            File.saveBase64ToFile(req.body.profile.avatar, _user._id, ['png', 'gif', 'jpeg'])
              .then(filedata => cloudinary.v2.uploader.upload(filedata.filepath, {
                public_id: _user._id,
                transformation: [{
                  width: 400,
                  height: 400,
                  gravity: 'face',
                  crop: 'crop',
                }],
              }, (err, result) => {
                if (err) {
                  return next(err);
                }

                _user.profile.avatar = result.secure_url;
                fs.unlink(filedata.filepath);

                deferred.resolve();
              }))
              .catch(err => next(err));
          } else {
            cloudinary.v2.uploader.destroy(_user._id);
            _user.profile.avatar = '';
            deferred.resolve();
          }
        } else {
          deferred.resolve();
        }

        deferred.promise
          .then(() => {
            _user.profile.first_name = req.body.profile.first_name;
            _user.profile.last_name = req.body.profile.last_name;
            _user.profile.bio = req.body.profile.bio;

            _user.save((err, user) => {
              if (err) return next(err);
              return res.json(user);
            });
          })
          .catch(err => next(err));
      });
  },

  follow: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    if (req.user._id.toString() === req.params.userId) {
      const err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    User.findById(req.params.userId)
      .exec((err, _user) => {
        if (err) return next(err);

        if (!_user) {
          err = new Error('Bad Request');
          err.status = 400;
          return next(err);
        }

        User.update({
          _id: req.user._id,
        }, {
          $addToSet: {
            following: _user._id,
          },
        }).exec(err => {
          if (err) return next(err);

          return res.json({
            _id: _user._id,
          });
        });
      });
  },

  unfollow: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    if (req.user._id.toString() === req.params.userId) {
      const err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    User.findById(req.params.userId)
      .exec((err, _user) => {
        if (err) return next(err);

        if (!_user) {
          err = new Error('Bad Request');
          err.status = 400;
          return next(err);
        }

        User.update({
          _id: req.user._id,
        }, {
          $pull: {
            following: _user._id,
          },
        }).exec(err => {
          if (err) return next(err);

          return res.json({
            _id: _user._id,
          });
        });
      });
  },
};
