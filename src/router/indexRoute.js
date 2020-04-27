const { Router } = require('express');
const router = Router();

//controller
const { indexController, sendMessage, receiveMessage} = require('../controller/index.Controller')

router.get('/', indexController)
router.post('/send-sms',sendMessage)
router.post('/receive-sms', receiveMessage)

module.exports = router;