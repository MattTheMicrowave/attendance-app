var express = require('express');
var router = express.Router();
var students = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/attendance', function(req, res, next) {
students.push(req.body.student);
  res.redirect('/');
});

module.exports = router;
