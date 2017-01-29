/**
 * Created by Prasanth on 1/29/2017.
 */
require('dotenv/config');
require('../routes/users');
var sendgrid = require('sendgrid').mail;

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


from_email = new sendgrid.Email("NOREPLY@ASCIICODER.com");
to_email = new sendgrid.Email("PRASANTH@JAX.AE");
subject = "EMAIL CONFIRMATION ";
content = new sendgrid.Content("text/plain", "and easy to do anywhere, even with Node.js");
mail = new sendgrid.Mail(from_email, subject, to_email, content);

var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
});

sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
});

console.log(process.env.SENDGRID_API_KEY);
