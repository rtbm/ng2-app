'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const jwt = require('jsonwebtoken');
const User = require('../server/models/user');
const Invite = require('../server/models/invite');

chai.use(chaiHttp);

let id_token = '';
let user1_id = '';
let user2_id = '';
let invite_id = '';

describe('/api/invites', () => {
  before(done => {
    Invite.collection.drop();
    User.collection.drop();

    chai.request(server)
      .post('/api/auth/signup')
      .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
      .end((err, res) => {
        id_token = res.body.id_token;
        user1_id = jwt.decode(id_token)._id;

        chai.request(server)
          .post('/api/auth/signup')
          .send({ email: '7357@7357', password: '7357', password_confirm: '7357' })
          .end((err, res) => {
            user2_id = jwt.decode(res.body.id_token)._id;
            done();
          });
      });
  });

  it('should NOT add an invite because user is the same as requested', done => {
    chai.request(server)
      .post('/api/invites')
      .set('Authorization', `Bearer ${id_token}`)
      .send({
        invited: user1_id
      })
      .end((err, res) => {
        res.should.have.a.status(400);
        done();
      });
  });

  it('should add an invite', done => {
    chai.request(server)
      .post('/api/invites')
      .set('Authorization', `Bearer ${id_token}`)
      .send({
        invited: user2_id,
      })
      .end((err, res) => {
        res.should.have.a.status(200);
        res.should.be.a.json;
        res.body.should.be.an.object;
        res.body.should.have.a.property('invited');
        res.body.invited.should.be.a.string;
        res.body.invited.should.be.equal(user2_id);
        invite_id = res.body._id;
        done();
      });
  });

  it('should NOT add an invite and send duplicated status', done => {
    chai.request(server)
      .post('/api/invites')
      .set('Authorization', `Bearer ${id_token}`)
      .send({
        invited: user2_id,
      })
      .end((err, res) => {
        res.should.have.a.status(409);
        done();
      });
  });

  it('should send list of invited users', done => {
    chai.request(server)
      .get('/api/invites')
      .set('Authorization', `Bearer ${id_token}`)
      .end((err, res) => {
        res.should.have.a.status(200);
        res.should.be.a.json;
        res.body.should.be.an.array;
        res.body.length.should.be.equal(1);
        res.body[0].should.have.a.property('invited');
        res.body[0].invited.should.be.a.string;
        done();
      });
  });

  describe('/api/invites/:id', () => {
    it('should delete an invite', done => {
      chai.request(server)
        .delete(`/api/invites/${invite_id}`)
        .set('Authorization', `Bearer ${id_token}`)
        .send()
        .end((err, res) => {
          res.should.have.a.status(200);
          done();
        });
    });

    it('should return not found status', done => {
      chai.request(server)
        .get(`/api/invites/${invite_id}`)
        .set('Authorization', `Bearer ${id_token}`)
        .send()
        .end((err, res) => {
          res.should.have.a.status(404);
          done();
        });
    });
  });
});
