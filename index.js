const express = require('express');
const app     = express();
const port    = process.env.PORT || 3001 ;

(async() => {
    require('dotenv').config() ;
    require('./statup/config')();
    // import middlewares 
    require('./statup/middlewares')(app) ;
    // create connection with db
    require('./statup/connection')();
    // import routes ;
    require('./statup/routes')(app);
})()

app.listen(port , ( ) => {console.log(`Lisning on port ${port}`)});