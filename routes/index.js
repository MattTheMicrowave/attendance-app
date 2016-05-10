var express = require('express');
var router = express.Router();
var students = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', students: students });
});

router.post('/attendance', function(req, res, next) {
var name = req.body.student;
    if (students[name]) {
        students[name] += 1;
    } else {
      students[name] = 1;


    }
  res.redirect('/');
});

module.exports = router;
