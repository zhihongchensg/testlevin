var express = require('express');
var router = express.Router();
var Levenshtein = require('levenshtein')
var Natural = require('natural')
var list = [
  'danny',
  'melvin',
  'kelvin',
  'kevin',
  'delvin',
  'john',
  'jon'
]

router.get('/', function(req, res, next) {
  var a = "test"
  var b = "tests"
  var c = new Levenshtein (a, b)
  console.log(c.distance)
  console.log(Natural.LevenshteinDistance("ones","onezzzz"));
  console.log(Natural.PorterStemmer.stem("wordsss"))
  res.render('index', {hashed: c.distance})
});


router.get('/listmatch', function(req, res, next) {
  var inputname = "manny"
  var match = function(listname){
    console.log(listname)
    var temp = Natural.LevenshteinDistance(listname,inputname)
    if (temp < 2)
      return listname
  }
  var final = list.filter(match)
  res.render('listmatch', {hashed: final})
});






module.exports = router;
