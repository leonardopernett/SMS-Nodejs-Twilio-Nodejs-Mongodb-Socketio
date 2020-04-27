const mongoose = require('mongoose');

const config= {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb://localhost/smsdb', config)
        .then(db=>console.log('db is connected'))
        .catch(err=>console.log(err))