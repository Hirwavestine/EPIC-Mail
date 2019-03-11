'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _Message = require('../models/Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();

/*
  * Test the /GET route
  */
describe('/Get messages', function () {
  it('it should GET all emails/messages', function (done) {
    _chai2.default.request(_server2.default).get('/api/v1/messages').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('array');
      done();
    });
  });
});

/* 
  *Test the /POST route
  */
describe('/Post messages', function () {
  it('it should POST a message', function (done) {
    var messages = {
      id: 1234,
      subject: 'Welcome to EPIC-Mail',
      message: "Andela Challenge",
      parentMessageId: 5678,
      status: "sent",
      createdOn: 10032019
    };
    _chai2.default.request(_server2.default).post('/api/v1/messages').send(messages).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  });
});
/* 
  *Test the /DELETE/:id route
  */
/*describe('/DELETE/: id messages', () =>{
  it('it should DELETE a message given id', (done) =>{
    let messages= new Message({id:1234, subject:"Welcome to EPIC-Mail",message:"Andela Challenge",
    parentMessageId:5678, status: "sent",createdOn: 10032019
   })
   messages.save((err, messages)=>{
     chai.request(server)
     .delete('/api/v1/messages' + messages.id)
     .end((err, res) => {
       res.should.have.status(200);
       res.body.should.be.a('object');
       (done);
     });
    });
  });
});
  */
describe('/Get Unread messages', function () {
  it('it should GET all Unread messages', function (done) {
    _chai2.default.request(_server2.default).get('/api/v1/messages/unread').end(function (err, res) {
      res.body.should.be.a('array');
      done();
    });
  });
});
/*
GET SENT MESSAGES
*/
describe('/Get Sent messages', function () {
  it('it should GET all Sent messages', function (done) {
    _chai2.default.request(_server2.default).get('/api/v1/messages/sent').end(function (err, res) {
      res.body.should.be.a('array');
      done();
    });
  });
});