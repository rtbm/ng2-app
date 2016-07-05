'use strict';
const Invite = require('../models/invite');

module.exports = {
  findAll: (req, res, next) => {
    Invite.find({
      owner: req.user._id
    }).exec((err, invites) => {
      if (err) return next(err);
      return res.json(invites);
    });
  },

  save: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    if (req.user._id === req.body.invited) {
      const err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    Invite.findOne({
      owner: req.user._id,
      invited: req.body.invited,
    }).exec((err, invite) => {
      if (err) return next(err);

      if (invite) {
        err = new Error('Conflict');
        err.status = 409;
        return next(err);
      }

      const newInvite = new Invite({
        owner: req.user._id,
        invited: req.body.invited,
      });

      newInvite.save((err, invite) => {
        if (err) return next(err);
        return res.json(invite);
      });
    });
  },

  read: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Invite.findOne({
      _id: req.params.inviteId,
      owner: req.user._id,
    }).exec((err, invite) => {
      if (err) return next(err);

      if (!invite) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }

      return res.json(invite);
    });
  },

  remove: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Invite.findOneAndRemove({
      _id: req.params.inviteId,
      owner: req.user._id,
    }).exec((err, invite) => {
      if (err) return next(err);

      if (!invite) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      return res.json(invite);
    });
  },
};
