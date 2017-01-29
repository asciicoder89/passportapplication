var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/login',function(req,res,next){
    res.render('login',{title : 'loginactivity'});
});
router.get('/register',function(req,res,next){
    res.render('registration',{title : 'registration'});
});

router.post('/register',function(req,res,next){
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 =req.body.cpassword;

    req.check('name','name required').notEmpty();

    var err = req.validationErrors();
    console.log(err);
    res.render('registration',{err : err});


});

module.exports = router;
/*
 function hashPassword(){
 bcrypt.genSalt(11,function(err,salt){
 if(err){
 return console.log(err);
 }console.log(salt);
 })
 }
 hashPassword();
 */