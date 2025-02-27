var express = require("express");
var router = express.Router();
var db = require("../database");
var bcrypt = require("bcryptjs");
var app = express();
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// to display registration form
router.get("/register", function (req, res, next) {
  res.render("registration-form.ejs");
});

// to store user input detail on post request
router.post("/register", function (req, res, next) {
  console.log(
    "password:" + req.body.password,
    "confirm_password:" + req.body.confirm_password
  );
  var user_Data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_address: req.body.email_address,
    gender: req.body.gender,
    department: req.body.department,
    year: req.body.year,
    mobile_number: req.body.mobile_number,
    password: req.body.password,
    role: req.body.role,
  };
  var Aadhar_Data = {
    email_address: req.body.email_address,
    dob: req.body.dob,
    AadharNo: req.body.aadhar_number,
  };
  // check unique email address

  var sql = `SELECT * FROM users_registration WHERE email_address = ?`;
  db.query(sql, [user_Data.email_address], function (err, data, fields) {
    var success1 = false;
    if (err) throw err;
    if (data.length > 1) {
      var msg = user_Data.email_address + "was already exist";
    } else if (req.body.confirm_password != user_Data.password) {
      var msg = "Password & Confirm Password is not Matched";
    } else {
      // save users data into database
      user_Data.password = bcrypt.hashSync(user_Data.password, 10);
      var sql1 = `INSERT INTO users_registration SET ?`;
      var sql2 = `INSERT INTO aadharinfo SET ?`;
      console.log(sql1, "\n", sql2);
      db.query(sql1, user_Data, function (err, data) {
        if (err) throw err;
        db.query(sql2, Aadhar_Data, function (err, data) {
          if (err) throw err;
        });
      });
      var msg = `${req.body.role} registered Successfully`;
      success1 = true;
    }
    res.send({
      success: success1,
      alertMsg: msg,
      message: msg,
    });
  });
});
module.exports = router;
