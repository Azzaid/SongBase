/**
 * Created by p.zamulko on 05.05.2018.
 */
var app = require('../server/server');
var port = 8000;
app.listen(port, function() {
  console.log('running at localhost: ' + port);
});