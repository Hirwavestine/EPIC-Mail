'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Message = require('../models/Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object 
   */
  create: function create(req, res) {
    if (!req.body.subject && !req.body.message && !req.body.parentMessageId && !req.body.status) {
      return res.status(400).send({ 'message': 'All fields are required' });
    }
    var message = _Message2.default.create(req.body);
    return res.status(200).send(message);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} messages array
   */
  getAll: function getAll(req, res) {
    var messages = _Message2.default.findAll();
    return res.status(200).send(messages);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getOne: function getOne(req, res) {
    var message = _Message2.default.findOne(req.params.id);
    if (!message) {
      return res.status(400).send({ 'message': 'message not found' });
    }
    return res.status(200).send(message);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getUnread: function getUnread(req, res) {
    var messages = _Message2.default.findMessages('Unread');
    if (!messages) {
      return res.status(400).send({ 'message': 'message not found' });
    }
    return res.status(200).send(messages);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} message object
   */
  getSent: function getSent(req, res) {
    var messages = _Message2.default.findMessages('Sent');
    if (!messages) {
      return res.status(400).send({ 'message': 'message not found' });
    }
    return res.status(200).send(messages);
  },

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete: function _delete(req, res) {
    var message = _Message2.default.findOne(req.params.id);
    if (!message) {
      return res.status(400).send({ 'message': 'message not found' });
    }
    var mes = _Message2.default.delete(req.params.id);
    return res.status(200).send(mes);
  }
};

exports.default = Message;