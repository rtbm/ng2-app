'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const mongoose = require('mongoose');
const Quote = require('../server/models/quote');
const User = require('../server/models/user');

chai.use(chaiHttp);

let id_token = '';

describe('/api/quotes/:_id', () => {
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
    Quote.collection.drop();
    done();
  });

  it('should add a quote', done => {
    chai.request(server)
      .post('/api/quotes')
      .set('Authorization', `Bearer ${id_token}`)
      .send({ name: 'test', content: 'test', url: 'test' })
      .end((err, res) => {
        res.should.have.a.status(200);
        res.should.be.a.json;
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.name.should.be.a.string;
        res.body.should.have.property('content');
        res.body.content.should.be.a.string;
        res.body.should.have.property('url');
        res.body.url.should.be.a.string;
        done();
      });
  });

  it('should get a quote', done => {
    chai.request(server)
      .post('/api/quotes')
      .set('Authorization', `Bearer ${id_token}`)
      .send({ name: 'test', content: 'test', url: 'test' })
      .end((err, res) => {
        const _id = res.body._id;
        chai.request(server)
          .get(`/api/quotes/${_id}`)
          .set('Authorization', `Bearer ${id_token}`)
          .send()
          .end((err, res) => {
            res.should.have.a.status(200);
            res.should.be.a.json;
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.name.should.be.a.string;
            res.body.name.should.be.equal('test');
            res.body.should.have.property('content');
            res.body.content.should.be.a.string;
            res.body.content.should.be.equal('test');
            res.body.should.have.property('url');
            res.body.url.should.be.a.string;
            res.body.url.should.be.equal('test');
            done();
          });
      });
  });

  it('should update a quote', done => {
    chai.request(server)
      .post('/api/quotes')
      .set('Authorization', `Bearer ${id_token}`)
      .send({ name: 'test', content: 'test', url: 'test' })
      .end((err, res) => {
        const _id = res.body._id;
        chai.request(server)
          .put(`/api/quotes/${_id}`)
          .set('Authorization', `Bearer ${id_token}`)
          .send({ name: 'test2', content: 'test2', url: 'test2' })
          .end((err, res) => {
            res.should.have.a.status(200);
            res.should.be.a.json;
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.name.should.be.a.string;
            res.body.name.should.be.equal('test2');
            res.body.should.have.property('content');
            res.body.content.should.be.a.string;
            res.body.content.should.be.equal('test2');
            res.body.should.have.property('url');
            res.body.url.should.be.a.string;
            res.body.url.should.be.equal('test2');
            done();
          });
      });
  });

  it('should delete a quote', done => {
    chai.request(server)
      .post('/api/quotes')
      .set('Authorization', `Bearer ${id_token}`)
      .send({ name: 'test', content: 'test', url: 'test' })
      .end((err, res) => {
        const _id = res.body._id;
        chai.request(server)
          .delete(`/api/quotes/${_id}`)
          .set('Authorization', `Bearer ${id_token}`)
          .send()
          .end((err, res) => {
            chai.request(server)
              .get(`/api/quotes/${_id}`)
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
