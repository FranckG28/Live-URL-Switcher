const { localsName } = require('ejs');
const express = require('express');
const fs = require('fs');
const app = express();

//************ APP ************* */

const controllersFilePath = "data/controllers/";

function getControllerFilePath(id) {
  return controllersFilePath + id + ".json";
}

function getControllerData(id) {
  path = getControllerFilePath(id);
  if (!fs.existsSync(path)) {
    fs.appendFileSync(path, "{}");
  }
  result = JSON.parse(fs.readFileSync(getControllerFilePath(id)).toString());
  //console.log(id + " obtenu ! Données : " + JSON.stringify(result));
  return result;
}

function saveControllerData(id, data) {
  fs.writeFileSync(getControllerFilePath(id), JSON.stringify(data))
  //console.log(id+ " enregistré ! Données : " + JSON.stringify(data));
}

function addControllerData(id, name, url) {
  data = getControllerData(id);
  data[name] = url;
  saveControllerData(id, data);
}

function removeControllerData(id, name) {
  data = getControllerData(id);
  delete data[name];
  saveControllerData(id, data);
}


//************ SERVER & REQUESTS ************/

// View Engine
app.set('view engine', 'ejs');

// Express config
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

// Requests handlers
app.get('/', (req, res) => {
  res.render('index', {title: "Accueil"});
});

// // Titles
// app.get('/titles', (req, res) => {
//   res.sendFile('./public/titles/control.html', {root: __dirname});
// });

app.get('/url/source/:id', (req, res) => {
  res.render('url_source', {title: "URL Source", id: req.params.id});
});

app.get('/url/controller/:id', (req, res) => {
  // GET DATA :
  data = getControllerData(req.params.id);
  res.render('url_control', {title: "URL Controller", id: req.params.id, data: data, errorMsg: ""});
});

app.post('/url/add/', (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let url = req.body.url;

  // TODO : AMELIORER LA VERIFICATION

  if(name && url) {
    // VALIDE : Enregistrer : 
    data = addControllerData(id, name, url);
  } else {
    // TODO : AFFICHER MESSAGE D'ERREUR
  }
  
  res.redirect("/url/controller/"+id);

});

app.post('/url/remove/', (req, res) => {
  let id = req.body.id;
  let name = req.body.name;

  // TODO : AMELIORER LA VERIFICATION

  if(name && id) {
    // VALIDE : Supprimer : 
    removeControllerData(id, name);
  } else {
    // TODO : AFFICHER MESSAGE D'ERREUR
  }
  
  res.redirect("/url/controller/"+id);

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
