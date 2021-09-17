const express = require('express')
const app = express();

app.set('view engine', 'ejs');

app.listen(8000, () => {
  console.log(`Serveur démarré !`);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', {root: __dirname});
});

app.get('/dynamicurl', (req, res) => {
  res.sendFile('./public/dynamicurl/control.html', {root: __dirname});
});

app.get('/titles', (req, res) => {
  res.sendFile('./public/titles/control.html', {root: __dirname});
});

app.use((req, res) => {
  res.status(404).send('404 !!');
})