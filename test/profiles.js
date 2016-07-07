'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const User = require('../server/models/user');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

let id_token = '';
let _id = '';

describe('/api/profiles', () => {
  beforeEach(done => {
    User.collection.drop();
    done();
  });

  it('should return empty user profile', done => {
    chai.request(server)
      .post('/api/auth/signup')
      .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
      .end((err, res) => {
        id_token = res.body.id_token;
        _id = jwt.decode(res.body.id_token)._id;

        chai.request(server)
          .get(`/api/profiles/${_id}`)
          .set('Authorization', `Bearer ${id_token}`)
          .send()
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.not.null;
            res.body.should.be.an.object;
            res.body.should.have.a.property('first_name');
            res.body.first_name.should.be.equal('');
            res.body.should.have.a.property('last_name');
            res.body.last_name.should.be.equal('');
            res.body.should.have.a.property('bio');
            res.body.bio.should.be.equal('');
            done();
          });
      });
  });

  it('should update user profile', done => {
    chai.request(server)
      .post('/api/auth/signup')
      .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
      .end((err, res) => {
        id_token = res.body.id_token;
        _id = jwt.decode(res.body.id_token)._id;

        chai.request(server)
          .put(`/api/profiles/${_id}`)
          .set('Authorization', `Bearer ${id_token}`)
          .send({ first_name: 'Jack', last_name: 'Daniels', bio: 'Anonymous Alcoholic' })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.not.null;
            res.body.should.be.an.object;
            res.body.should.have.a.property('first_name');
            res.body.first_name.should.be.equal('Jack');
            res.body.should.have.a.property('last_name');
            res.body.last_name.should.be.equal('Daniels');
            res.body.should.have.a.property('bio');
            res.body.bio.should.be.equal('Anonymous Alcoholic');
            done();
          });
      });
  });
});