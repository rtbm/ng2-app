'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const User = require('../server/models/user');

chai.use(chaiHttp);

describe('/api/users', () => {
  beforeEach(done => {
    User.collection.drop();
    done();
  });

  describe('it should send users list', done => {
    chai.request(server)
      .post('/api/auth/signup')
      .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
      .end((err, res) => {
        chai.request(server)
          .get('/api/users')
          .send()
          .end(err, res => {
            res.should.have.a.status(200);
            res.should.be.a.json;
            res.body.should.be.an('Array');
            res.body.length.should.be.equal(1);
            res.body[0].should.have.property('email');
            res.body[0].invited.should.be.a.string;
            done();
          });
      });
  });
});
