const {Schema, model}= require('mongoose');

const newSchema = new Schema({
    Body:{
        type:String, required:true
    },
    to:{
        type:String
    },
    from:{
        type:String
    }
},{timestamps:true})


module.exports = model('sms', newSchema)