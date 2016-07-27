'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');
const should = chai.should();
const User = require('../server/models/user');
const Quote = require('../server/models/quote');

chai.use(chaiHttp);

let id_token = '';
let quote_id = '';

describe('/api/quotes', () => {
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

  it('should add a quote', done => {
    chai.request(server)
      .post('/api/quotes')
      .set('Authorization', `Bearer ${id_token}`)
      .send({ name: 'test', content: 'test', url: 'test' })
      .end((err, res) => {
        res.should.have.a.status(200);
        res.should.be.a.json;
        res.body.should.be.an.object;
        res.body.should.have.property('name');
        res.body.name.should.be.a.string;
        res.body.should.have.property('content');
        res.body.content.should.be.a.string;
        res.body.should.have.property('url');
        res.body.url.should.be.a.string;
        quote_id = res.body._id;
        done();
      });
  });

  it('should send quotes list', done => {
    chai.request(server)
      .get('/api/quotes')
      .set('Authorization', `Bearer ${id_token}`)
      .end((err, res) => {
        res.should.have.a.status(200);
        res.should.be.a.json;
        res.body.should.be.an.array;
        res.body.length.should.be.equal(1);
        res.body[0].should.have.property('name');
        res.body[0].name.should.be.a.string;
        res.body[0].should.have.property('content');
        res.body[0].content.should.be.a.string;
        res.body[0].should.have.property('url');
        res.body[0].url.should.be.a.string;
        done();
      });
  });

  describe('/api/quotes/:id', () => {
    it('should get a quote', done => {
      chai.request(server)
        .get(`/api/quotes/${quote_id}`)
        .set('Authorization', `Bearer ${id_token}`)
        .send()
        .end((err, res) => {
          res.should.have.a.status(200);
          res.should.be.a.json;
          res.body.should.be.an.object;
          res.body.should.have.a.property('name');
          res.body.name.should.be.a.string;
          res.body.name.should.be.equal('test');
          res.body.should.have.a.property('content');
          res.body.content.should.be.a.string;
          res.body.content.should.be.equal('test');
          res.body.should.have.property('url');
          res.body.url.should.be.a.string;
          res.body.url.should.be.equal('test');
          done();
        });
    });

    it('should update a quote', done => {
      chai.request(server)
        .put(`/api/quotes/${quote_id}`)
        .set('Authorization', `Bearer ${id_token}`)
        .send({ name: 'test2', content: 'test2', url: 'test2' })
        .end((err, res) => {
          res.should.have.a.status(200);
          res.should.be.a.json;
          res.body.should.be.an.object;
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

    it('should delete a quote', done => {
      chai.request(server)
        .delete(`/api/quotes/${quote_id}`)
        .set('Authorization', `Bearer ${id_token}`)
        .send()
        .end((err, res) => {
          res.should.have.a.status(200);
          done();
        });
    });

    it('should return not found status', done => {
      chai.request(server)
        .get(`/api/quotes/${quote_id}`)
        .set('Authorization', `Bearer ${id_token}`)
        .send()
        .end((err, res) => {
          res.should.have.a.status(404);
          done();
        });
    });
  });

  describe('/api/quotes/search?q=:query', () => {
    it('should add a quote and create search index', done => {
      chai.request(server)
        .post('/api/quotes')
        .set('Authorization', `Bearer ${id_token}`)
        .send({ name: 'test', content: 'test', url: 'test' })
        .end((err, res) => {
          res.should.have.a.status(200);
          Quote.collection.createIndex({ name: 'text' });
          done();
        });
    });

    it('should send search results', done => {
      chai.request(server)
        .get(`/api/quotes/search?q=test`)
        .set('Authorization', `Bearer ${id_token}`)
        .send()
        .end((err, res) => {
          res.should.be.a.json;
          res.body.should.be.an.array;
          res.body.length.should.be.equal(1);
          res.body[0].should.have.property('name');
          res.body[0].name.should.be.a.string;
          res.body[0].should.have.property('content');
          res.body[0].content.should.be.a.string;
          res.body[0].should.have.property('url');
          res.body[0].url.should.be.a.string;
          done();
        });
    });

    it('should NOT send search results', done => {
      chai.request(server)
        .get(`/api/quotes/search?q=test2`)
        .set('Authorization', `Bearer ${id_token}`)
        .send()
        .end((err, res) => {
          res.should.be.a.json;
          res.body.should.be.an.array;
          res.body.length.should.be.equal(0);
          done();
        });
    });
  });
});
