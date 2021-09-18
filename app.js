const { localsName } = require('ejs');
const express = require('express')
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Express config
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

// Requests handlers
app.get('/', (req, res) => {
  res.render('index', {title: "Accueil"});
});

// DynamicURL
// app.get('/dynamicurl', (req, res) => {
//   res.sendFile('./public/dynamicurl/control.html', {root: __dirname});
// });

// // Titles
// app.get('/titles', (req, res) => {
//   res.sendFile('./public/titles/control.html', {root: __dirname});
// });

// Escreens
// app.get('/url', (req, res) => {
//   res.status(404).render('404');
// });

app.get('/url/source/:id', (req, res) => {
  res.render('url_source', {title: "URL Source", id: req.params.id});
});

app.get('/url/controller/:id', (req, res) => {
  res.render('url_control', {title: "URL Controller", id: req.params.id});
});

app.get('/url/paster/:id', (req, res) => {
  res.render('url_paster', {title: "URL Paster", id: req.params.id});
});

// 404
app.use((req, res) => {
  res.status(404).render('404', {title: "404"});
})

// Server listen
app.listen(8000, () => {
  console.log(`Serveur démarré !`);
});
