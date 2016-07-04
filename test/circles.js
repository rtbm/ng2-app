'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const User = require('../server/models/user');
const Circle = require('../server/models/circle');

chai.use(chaiHttp);

let id_token = '';

describe('/api/circles', () => {
  before(done => {
    User.collection.drop();

    chai.request(server)
      .post('/api/auth/signup')
      .send({ email: 'test@test', password: 'test', password_confirm: 'test' })
      .end((err, res) => {
        id_token = res.body.id_token;
        done();
      });
  });

  beforeEach(done => {
    Circle.collection.drop();
    done();
  });

  it('should add a circle', done => {
    chai.request(server)
      .post('/api/circles')
      .set('Authorization', `Bearer ${id_token}`)
      .send({ name: 'test', content: 'test', url: 'test' })
      .end((err, res) => {
        res.should.have.a.status(200);
        res.should.be.a.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.be.a.string;
        done();
      });
  });

  it('should send circles list', done => {
    chai.request(server)
      .post('/api/circles')
      .set('Authorization', `Bearer ${id_token}`)
      .send({ name: 'test' })
      .end((err, res) => {
        chai.request(server)
          .get('/api/circles')
          .set('Authorization', `Bearer ${id_token}`)
          .end((err, res) => {
            res.should.have.a.status(200);
            res.should.be.a.json;
            res.body.should.be.an('Array');
            res.body.length.should.be.equal(1);
            res.body[0].should.have.property('name');
            res.body[0].name.should.be.a.string;
            done();
          });
      });
  });

  describe('/api/circles/:id', () => {
    it('should get a circle', done => {
      chai.request(server)
        .post('/api/circles')
        .set('Authorization', `Bearer ${id_token}`)
        .send({ name: 'test' })
        .end((err, res) => {
          const _id = res.body._id;
          chai.request(server)
            .get(`/api/circles/${_id}`)
            .set('Authorization', `Bearer ${id_token}`)
            .send()
            .end((err, res) => {
              res.should.have.a.status(200);
              res.should.be.a.json;
              res.body.should.be.a('object');
              res.body.should.have.property('name');
              res.body.name.should.be.a.string;
              res.body.name.should.be.equal('test');
              done();
            });
        });
    });

    it('should update a circle', done => {
      chai.request(server)
        .post('/api/circles')
        .set('Authorization', `Bearer ${id_token}`)
        .send({ name: 'test' })
        .end((err, res) => {
          const _id = res.body._id;
          chai.request(server)
            .put(`/api/circles/${_id}`)
            .set('Authorization', `Bearer ${id_token}`)
            .send({ name: 'test2' })
            .end((err, res) => {
              res.should.have.a.status(200);
              res.should.be.a.json;
              res.body.should.be.a('object');
              res.body.should.have.property('name');
              res.body.name.should.be.a.string;
              res.body.name.should.be.equal('test2');
              done();
            });
        });
    });

    it('should delete a circle', done => {
      chai.request(server)
        .post('/api/circles')
        .set('Authorization', `Bearer ${id_token}`)
        .send({ name: 'test' })
        .end((err, res) => {
          const _id = res.body._id;
          chai.request(server)
            .delete(`/api/circles/${_id}`)
            .set('Authorization', `Bearer ${id_token}`)
            .send()
            .end((err, res) => {
              chai.request(server)
                .get(`/api/circles/${_id}`)
                .set('Authorization', `Bearer ${id_token}`)
                .send()
                .end((err, res) => {
                  res.should.have.a.status(404);
                  done();
                });
            });
        });
    });
  });
});
