import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import Message from '../models/Message';
chai.use(chaiHttp);
chai.should();

/*
  * Test the /GET route
  */
 describe('/Get messages', () => {
    it('it should GET all emails/messages', (done) => {
      chai.request(server)
          .get('/api/v1/messages')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
});

/* 
  *Test the /POST route
  */
 describe('/Post messages', () => {
   it('it should POST a message', (done) =>{
     let messages = {
       id: 1234,
       subject:'Welcome to EPIC-Mail',
       message:"Andela Challenge",
       parentMessageId:5678,
       status: "sent",
       createdOn: 10032019
     }
     chai.request(server)
     .post('/api/v1/messages')
     .send(messages)
     .end((err, res) =>{
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
 describe('/Get Unread messages', () => {
  it('it should GET all Unread messages', (done) => {
    chai.request(server)
        .get('/api/v1/messages/unread')
        .end((err, res) => {
              res.body.should.be.a('array');
          done();
        });
  });
});
/*
GET SENT MESSAGES
*/
describe('/Get Sent messages', () => {
  it('it should get all Sent messages', (done) => {
    chai.request(server)
        .get('/api/v1/messages/sent')
        .end((err, res) => {
              res.body.should.be.a('array');
          done();
        });
  });
});



