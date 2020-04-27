const {sendMessage} = require('../twilio/send-sms');
const sms = require('../model/sms');
const MessagingResponse = require('twilio').twiml.MessagingResponse

const {getSocket} = require('../socket');

exports.indexController = async(req,res)=>{
    const messages = await sms.find().sort({'createdAt':-1}).lean();
    res.render('index',{messages})
}

exports.sendMessage = async (req,res)=>{
    const {message, phone} = req.body;
    
    if(!message || !phone){
        return res.json('thing wrong')
    }
    //llamar la funcion de twilio 
    await sendMessage(message, phone);

    //save databae
    await sms.create({
        Body:message,
        to:phone
    })
    res.redirect('/')
}

exports.receiveMessage = async (req,res)=>{
     const saveSMS = await sms.create({
         Body:req.body.Body,
         from:req.body.From
     })
     
     getSocket().emit('new-message', saveSMS);
     const twiml = new MessagingResponse()
   // twiml.message('this is my response');
    res.send(twiml.toString());
}