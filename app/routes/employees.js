var express = require('express');
var router = express.Router();

router.get('/employees', function(req, res) {
  var info = '';
  var dataFile = req.app.get('appData');
  dataFile.employees.forEach(function(item) {
    info += `
    <li>

      <h2>${item.name}</h2>

      <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker">
      <p>${item.summary}</p>
    </li>
    `;
  });
  res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
      <h1>employee Showroom</h1>
      <script src = "/reload/reload.js"></script>
      ${info}
  `);
});

router.get('/employees/:employeeid', function(req, res) {
  var dataFile = req.app.get('appData');
  var employee = dataFile.employees[req.params.employeeid];
  res.send(`
      <link rel="stylesheet" type="text/css" href="/css/style.css">
      <h1>${employee.title}</h1>
      <h2>with ${employee.name}</h2>
      <img src="/images/speakers/${employee.shortname}_tn.jpg" alt="employee">
      <p>${employee.summary}</p>
      <script src = "/reload/reload.js"></script>
  `);
});

module.exports = router;
