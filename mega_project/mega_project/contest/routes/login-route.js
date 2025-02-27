var express = require('express');

var bcrypt = require('bcryptjs');
var router = express.Router();
var db=require('../database');
var app = express();
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login-form.ejs');
});

router.post('/login', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;


    var sql= `SELECT * FROM users_registration WHERE email_address = ? AND Role <> 'Admin'`;
    db.query(sql, [emailAddress], function (err, data, fields) {
        if(err) throw err
        if(data.length > 0){
            console.log(data);
        if(bcrypt.compareSync(password, data[0].Password)){
            req.session.loggedinUser= true;
            req.session.emailAddress= req.body.email_address;
            req.session.Role = data[0].Role;
            res.redirect('/userInfo');
            // res.redirect('/blockchain');
        }else{
            res.render('login-form.ejs',{alertMsg:"Your Email Address or password is wrong"});
        }
    }
    })

})

module.exports = router;

