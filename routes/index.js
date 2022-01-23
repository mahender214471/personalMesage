const express = require('express') ;
const { json } = require('express/lib/response');
const fs = require('fs')
const app = express.Router() ;
const middleware = require('../middlewares');
app.get( '/' , ( req ,res ) => {
        res.render('index')
}) ;

app.post ('/login' , middleware.AuthLogin ,  ( req ,res) => {
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     console.log(ip) ;
     fs.writeFileSync(`${process.cwd()}/log/${ip}` , `${JSON.stringify(req.headers)}`);
     res.render('message') ;
});

app.get('/log' ,  middleware.AuhtLog , ( req ,res) => {
     const logs = fs.readdirSync(`${process.cwd()}/log` , 'utf-8') ;
     res.send(JSON.stringify(logs)) ;
})
module.exports = app ;