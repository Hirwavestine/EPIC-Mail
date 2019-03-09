import moment from 'moment';
import uuid from 'uuid';
import async from 'async';

class Message {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.messages = []
  }
  /**
   * 
   * @returns {object} message object
   */
  create(data) {
    const newMessage = {
      id: uuid.v4(),
      subject: data.subject || '',
      message: data.message || '',
      parentMessageId: data.parentMessageId || '',
      status: data.status || '',
      createdOn: moment.now()
    };
    this.messages.push(newMessage);
    return newMessage
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} message object
   */
  findOne(id) {
    return this.messages.find(mess => mess.id === id);
  }
  findMessages(status){
      let readMsgs = [];
      async.eachSeries(this.messages, (current, cb)=>{
          if(current.status==status) readMsgs.push(current);
          cb(null);
      },(err)=>{

      })
      return readMsgs;
  }
  /**
   * @returns {object} returns all messages
   */
  findAll() {
    return this.messages;
  }
  
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const message = this.findOne(id);
    const index = this.messages.indexOf(message);
    this.messages.splice(index, 1);
    return {};
  }
}
export default new Message();