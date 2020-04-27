const {format} = require('timeago.js')
const helpers = {}

helpers.hideNumber = (number='')=>{
   return number.replace(/[0-9]/g,'x')
}

helpers.timeago = (timestamp)=>{
    return format(timestamp)
}

module.exports= helpers;