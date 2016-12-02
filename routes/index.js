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
  // var inputname = document.getElementById('userinput')
  var inputname = "yaya"
  console.log(req.body)
  // console.log('hello back at routes' + req.query)

  var match = function(listname){
    // console.log(listname)
    console.log(inputname)
    var temp = Natural.LevenshteinDistance(listname,inputname)
    if (temp < 2)
      return listname
  }
  var final = list.filter(match)
  res.render('listmatch', {
    hashed: final,
    list: list
  })
});

module.exports = router;
