'use strict';
const fs = require('fs');
const Q = require('q');

module.exports = {
  saveBase64ToFile: (dataURI, filenamePrefix, supportedMediaTypes) => {
    const deferred = Q.defer();

    if (dataURI) {
      const regex = /^data:.+\/(.+);base64,(.*)$/;
      const matches = dataURI.match(regex);
      const mediaType = matches[1];
      const data = matches[2];
      const fileType = supportedMediaTypes.indexOf(mediaType);

      if (fileType === -1) {
        const err = new Error('Unsupported Media Type');
        err.status = 415;
        deferred.reject(err);
      }

      const tmpdir = `${process.cwd()}/tmp`;
      const filename = `${filenamePrefix}_${(new Date()).getTime()}.${mediaType}`;
      const filebuff = new Buffer(data, 'base64');
      const filepath = `${tmpdir}/${filename}`;

      fs.writeFile(`${filepath}`, filebuff, { flag: 'w' }, err => {
        if (err) {
          deferred.reject(err);
        }
        deferred.resolve({ filepath, filename });
      });
    } else {
      const err = new Error('Bad Request');
      err.status = 400;
      deferred.reject(err);
    }

    return deferred.promise;
  },
};
