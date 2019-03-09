import express from 'express';
import Message from '../controllers/Message';
const router = express.Router();

router.post('/messages', Message.create);
router.get('/messages', Message.getAll);
router.get('/messages/unread', Message.getUnread);
router.get('/messages/sent', Message.getSent);
router.get('/messages/unread', Message.getOne);
router.delete('/messages/:id', Message.delete);

module.exports = router;