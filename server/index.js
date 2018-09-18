const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

console.log("Dirname: ", __dirname);

app.listen(3000, () => console.log('server running @ port:3000'));
app.use(cors());

console.log("Static files root:", path.join(__dirname, '../public', 'index.html'));

app.use(express.static(path.join(__dirname, '../public')));
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

