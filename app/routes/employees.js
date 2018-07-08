var express = require('express');
var router = express.Router();



router.get('/employees', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageEmployess = data.employees;
  data.employees.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.artwork);
  });
res.render('employees',{
  pageTitle:'employee',
  artwork: pagePhotos,
  employees: pageEmployess,
  pageID:'employeelist'
});
});

router.get('/employees/:employeeid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageEmployess = [];
  data.employees.forEach(function(item){
if(item.shortname == req.params.employeeid){
    pageEmployess.push(item);
    pagePhotos = pagePhotos.concat(item.artwork);
  }
  });
res.render('employees',{
  pageTitle:'Employee Info',
  artwork: pagePhotos,
  employees: pageEmployess,
  pageID:'employeeDetail'
});
});

module.exports = router;
