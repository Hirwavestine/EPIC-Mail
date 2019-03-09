import MessageModel from '../models/Message';

const Message = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object 
   */
  create(req, res) {
    if (!req.body.subject && !req.body.message && !req.body.parentMessageId && !req.body.status) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const message = MessageModel.create(req.body);
    return res.status(200).send(message);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} messages array
   */
  getAll(req, res) {
    const messages = MessageModel.findAll();
    return res.status(200).send(messages);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getOne(req, res) {
    const message = MessageModel.findOne(req.params.id);
    if (!message) {
      return res.status(400).send({'message': 'message not found'});
    }
    return res.status(200).send(message);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getUnread(req, res) {
    const messages = MessageModel.findMessages('Unread');
    if (!messages) {
      return res.status(400).send({'message': 'message not found'});
    }
    return res.status(200).send(messages);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getSent(req, res) {
    const messages = MessageModel.findMessages('Sent');
    if (!messages) {
      return res.status(400).send({'message': 'message not found'});
    }
    return res.status(200).send(messages);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const message = MessageModel.findOne(req.params.id);
    if (!message) {
      return res.status(400).send({'message': 'message not found'});
    }
    const mes = MessageModel.delete(req.params.id);
    return res.status(200).send(mes);
  }
}

export default Message;