const statisRoute = require('../routes') ;
module.exports = async ( app ) => {
   app.use('/' , statisRoute) ;
}