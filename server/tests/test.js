import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
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
   


