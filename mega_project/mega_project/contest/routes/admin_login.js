var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var db=require('../database');
var app = express();
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
/* GET users listing. */
router.get('/adlogin', function(req, res, next) {
  res.render('admin_login.ejs');
});


router.post('/adlogin', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;

    var sql='SELECT * FROM users_registration WHERE email_address = ? and Role = "Admin"';
    db.query(sql, [emailAddress], function (err, data, fields) {
        if(err) {
            console.log(data)
            throw err}
        if(data.length>0){
            if(bcrypt.compareSync(password,data[0].Password)){
            console.log(bcrypt.compareSync(password,data[0].Password));
            req.session.loggedinUser= true;
            req.session.emailAddress = emailAddress;
            req.session.role = data[0].Role;
            res.redirect('/addCandidate');
        }
            else{
                res.render('admin_login.ejs',{alertMsg:"Your Email Address or password is wrong"});
        }
        }
    })

})

module.exports = router;

