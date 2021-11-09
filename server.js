const express = require('express');
const app = express();
const log = require('./middleware/mid')
const morgan = require('morgan');
const helmet = require('helmet');
const config = require('config');
const  debug = require('debug')("app:")

app.use(log.logger)// custom middleware


app.use(express.urlencoded({ extended: true })) //This is a built-in middleware function in Express. 
//It parses incoming requests with urlencoded payloads and is based on body-parser.



app.use(express.static("public")); //This is a built-in middleware function in Express. 
//It serves static files and is based on serve-static.


app.use(morgan('tiny')); //HTTP request logger middleware for node.js


app.use(helmet()) //Helmet helps you secure your Express apps 
//by setting various HTTP headers. It's not a silver bullet, but it can help!

console.log(app.get("env")) // return enviroment variable if its not set it return development default 
//to change the environment variable type in cmd "export NODE_ENV=production".

console.log(config.name,config.host,config.user.id,config.user.password,config.user.pass)//return config data

debug('listening...'); //use debug for more convenient then console.log first set "exports DEBUG=app"

app.get('/', (req, res) => {
    
    res.status(200).send("successfully");
})

app.listen(5500, () => console.log("server successfully run on http://127.0.0.1:5500"));