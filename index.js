import express from 'express';

const app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + 'index.html');
});
