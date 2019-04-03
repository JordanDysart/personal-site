const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// this port has to match the proxy request inside of package.json for client
const port = process.env.PORT || 5858;

const database = require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO query database
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);

  var sql = "INSERT INTO inventory {}"

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );


});

app.listen(port, () => console.log(`Listening on port ${port}`));
