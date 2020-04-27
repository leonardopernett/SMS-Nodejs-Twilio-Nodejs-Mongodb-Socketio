const { account_sid, auth_token} = require("../config");
const client = require("twilio")(account_sid, auth_token);

const sendMessage = async (message, phone) => {
  try {
    const res = await client.messages.create({
      from:'+12056515838',
      to:`+57${phone}`,
      body:`${message}`
   })
    return res;

  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  sendMessage
}
