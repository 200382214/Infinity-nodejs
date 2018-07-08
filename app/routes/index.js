var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageEmployess = data.employees;
  data.employees.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.artwork);
  });
res.render('index',{
  pageTitle:'Home',
  artwork: pagePhotos,
  employees: pageEmployess,
  pageID:'home'
});
});

module.exports = router;
