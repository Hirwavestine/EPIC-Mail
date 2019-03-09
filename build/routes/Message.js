'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Message = require('../controllers/Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/messages', _Message2.default.create);
router.get('/messages', _Message2.default.getAll);
router.get('/messages/unread', _Message2.default.getUnread);
router.get('/messages/sent', _Message2.default.getSent);
router.get('/messages/unread', _Message2.default.getOne);
router.delete('/messages/:id', _Message2.default.delete);

module.exports = router;