'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const User = require('../server/models/user');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

let id_token = '';
let user1_id = '';
let user2_id = '';

describe('/api/users', () => {
  before(done => {
    User.collection.drop();

    chai.request(server)
      .post('/api/auth/signup')
      .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
      .end((err, res) => {
        id_token = res.body.id_token;
        user1_id = jwt.decode(res.body.id_token)._id;

        chai.request(server)
          .post('/api/auth/signup')
          .send({ email: 'test2@test', password: 'test', password_confirm: 'test' })
          .end((err, res) => {
            user2_id = jwt.decode(res.body.id_token)._id;
            done();
          });
      });
  });

  it('should send users list', done => {
    chai.request(server)
      .get('/api/users')
      .set('Authorization', `Bearer ${id_token}`)
      .send()
      .end((err, res) => {
        res.should.have.a.status(200);
        res.should.be.a.json;
        res.body.should.be.an.array;
        res.body.length.should.be.equal(2);
        res.body[0].should.have.property('email');
        done();
      });
  });

  it('should update user profile', done => {
    chai.request(server)
      .put(`/api/users/${user1_id}`)
      .set('Authorization', `Bearer ${id_token}`)
      .send({
        _id: user1_id,
        profile: {
          first_name: 'Jack',
          last_name: 'Daniels',
          bio: 'Anonymous Alcoholic',
        }
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.not.null;
        res.body.should.be.an.object;
        res.body.should.have.a.property('profile');
        res.body.profile.should.be.an.object;
        res.body.profile.should.have.a.property('first_name');
        res.body.profile.first_name.should.be.equal('Jack');
        res.body.profile.should.have.a.property('last_name');
        res.body.profile.last_name.should.be.equal('Daniels');
        res.body.profile.should.have.a.property('bio');
        res.body.profile.bio.should.be.equal('Anonymous Alcoholic');
        done();
      });
  });

  it('should NOT add a user to following', done => {
    chai.request(server)
      .post(`/api/users/${user1_id}/follow`)
      .set('Authorization', `Bearer ${id_token}`)
      .send({})
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('should add a user to following', done => {
    chai.request(server)
      .post(`/api/users/${user2_id}/follow`)
      .set('Authorization', `Bearer ${id_token}`)
      .send({})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.not.null;
        res.body.should.be.an.object;
        res.body.should.have.a.property('_id');
        res.body._id.should.be.not.null;
        res.body._id.should.be.a.string;
        res.body._id.should.be.equal(user2_id);
        done();
      });
  });

  it('should remove a user from following', done => {
    chai.request(server)
      .delete(`/api/users/${user2_id}/follow`)
      .set('Authorization', `Bearer ${id_token}`)
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.not.null;
        res.body.should.be.an.object;
        res.body.should.have.a.property('_id');
        res.body._id.should.be.not.null;
        res.body._id.should.be.a.string;
        res.body._id.should.be.equal(user2_id);
        done();
      });
  });
});
