
var page = require('webpage').create();
page.open('http://github.com/', function() {
  page.render('bob.png');
  phantom.exit();
});

