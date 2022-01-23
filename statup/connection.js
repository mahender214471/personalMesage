const mongoose = require('mongoose') ;

module.exports = async() => {
     mongoose.connect(process.env.mongoPath , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     })
     .then(
          console.log(`App connect with ${process.env.mongoPath}` , `susesfull` ) 
     )
     .catch((e) => {
          console.log(`falid with connect database` , e );
     })
}