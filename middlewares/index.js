const { Console } = require('console');
const { redirect } = require('express/lib/response');
const fs = require('fs');
const async = require('hbs/lib/async');

exports.AuthLogin = async (req, res, next) => {
    try {
        const { password } = req.body;
        if (password === undefined) {
            res.render('index', { error: 'Password required !' })
        }
        else if (password === '') {
            res.render('index', { error: 'Password required !' })
        }
        else {
           if (password !== 'manisha') {
                res.render('index', { error: 'Wrong password' }) ;
            }
            else if(password === 'manisha' ){
                next();
            }
        }
    } catch (e) {
        console.log(e);
    }
}

exports.AuhtLog = async(req ,res , next) => {
    const { key } = req.query ;
    console.log(key)
    if( key === undefined ){
         res.send('permition denied !')
    }
    else if( key === '' ){
        res.send('permition denied !')
   }
   else if( key !== 'mahender214471' ){
    res.send('permition denied !')
  }
  else {
      next()
  }
}