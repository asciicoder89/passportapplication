var express = require('express');
var router = express.Router();
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/google',function(req,res,next){
/*

    var oauth2Client = new OAuth2(
            210762176258-3br2hcmgamh2kfvv6amriom4vb1abqrg.apps.googleusercontent.com,
        UXW5qR73bTrGpzE9QZYB__L5,
        http://localhost:3000/oauthcallback
    );

*/
// generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
        'https://www.googleapis.com/auth/gmail.modify'
    ];

    var url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',

        // If you only need one scope you can pass it as string
        scope: scopes
    });
});

module.exports = router;
