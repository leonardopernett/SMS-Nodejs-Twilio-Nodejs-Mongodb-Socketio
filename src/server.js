const express = require('express');
const morgan = require('morgan');
const path = require('path')
const hbs  = require('express-handlebars')

//initialization
const app = express();

//setting
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', hbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'), 'layout'),
    partialsDir:path.join(app.get('views'), 'partial'),
    extname:'.hbs',
    helpers:require('./libs/handlebars')
}))
app.set('view engine', '.hbs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());


//global variable

//router
app.use(require('./router/indexRoute'))
//static
app.use(express.static(path.join(__dirname, 'public')))

//error 404
app.get('*', (req,res)=>{
    res.status(404).json('error 404, page not found');
})


module.exports =app

