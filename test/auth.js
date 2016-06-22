'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const mongoose = require('mongoose');
const User = require('../server/models/user');

chai.use(chaiHttp);

describe('/api/auth', () => {
  afterEach(done => {
    User.collection.drop();
    done();
  });

  describe('/api/auth/signup', () => {
    it('should return validation error status', done => {
      chai.request(server)
        .post('/api/auth/signup')
        .send({ email: 'test@test', password: '1', password_confirm: '2' })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        })
    });

    it('should add a user', done => {
      chai.request(server)
        .post('/api/auth/signup')
        .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
        .end((err, res) => {
          res.should.have.a.status(200);
          res.should.be.a.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id_token');
          res.body.id_token.should.be.a.string;
          res.body.id_token.should.be.not.empty;
          done();
        });
    });

    it('should NOT add a user and return duplicated status', done => {
      chai.request(server)
        .post('/api/auth/signup')
        .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
        .end((err, res) => {
          chai.request(server)
            .post('/api/auth/signup')
            .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
            .end((err, res) => {
              res.should.have.a.status(409);
              done();
            });
        });
    });

  });
});
