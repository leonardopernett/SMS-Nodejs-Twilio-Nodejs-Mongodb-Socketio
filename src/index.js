require('dotenv').config();
const app = require('./server');
const http = require('http');

const server = http.createServer(app)

//connect database
require('./database');

require('./socket').connection(server)
//server start
server.listen(app.get('port'), ()=>console.log(`server startup on http://localhost:${app.get('port')}`));