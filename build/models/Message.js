'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  /**
   * class constructor
   * @param {object} data
   */
  function Message() {
    _classCallCheck(this, Message);

    this.messages = [];
  }
  /**
   * 
   * @returns {object} message object
   */


  _createClass(Message, [{
    key: 'create',
    value: function create(data) {
      var newMessage = {
        id: _uuid2.default.v4(),
        subject: data.subject || '',
        message: data.message || '',
        parentMessageId: data.parentMessageId || '',
        status: data.status || '',
        createdOn: _moment2.default.now()
      };
      this.messages.push(newMessage);
      return newMessage;
    }
    /**
     * 
     * @param {uuid} id
     * @returns {object} message object
     */

  }, {
    key: 'findOne',
    value: function findOne(id) {
      return this.messages.find(function (mess) {
        return mess.id === id;
      });
    }
  }, {
    key: 'findMessages',
    value: function findMessages(status) {
      var readMsgs = [];
      _async2.default.eachSeries(this.messages, function (current, cb) {
        if (current.status == status) readMsgs.push(current);
        cb(null);
      }, function (err) {});
      return readMsgs;
    }
    /**
     * @returns {object} returns all messages
     */

  }, {
    key: 'findAll',
    value: function findAll() {
      return this.messages;
    }

    /**
     * 
     * @param {uuid} id 
     */

  }, {
    key: 'delete',
    value: function _delete(id) {
      var message = this.findOne(id);
      var index = this.messages.indexOf(message);
      this.messages.splice(index, 1);
      return {};
    }
  }]);

  return Message;
}();

exports.default = new Message();