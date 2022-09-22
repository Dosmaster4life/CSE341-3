const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');
const port = process.env.PORT || 10000;
const app = express();

require("dotenv").config();

app.use(bodyParser.json()).use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
}).use('/',require('./routes'));

app.get('/favico.ico', (req, res) => { // removes the error for favicon.ico missing in some browsers.
    res.sendStatus(404); // We don't need to send anything back.
});

mongodb.initDatabase((error,mongodb) => {
    if(error) {
        console.log(error);
    }else {
        app.listen(port) 
            console.log('Server started on port: ' + port);
     
    }
});




