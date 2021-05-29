const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000
if(typeof Storage === "undefined" || Storage === null) {
  var JSONStorage = require('node-localstorage').JSONStorage;
  Storage = new JSONStorage('./dados');
}
Storage.setItem('pessoas', [
  {
  "nome":'Elaine',
  "descricao":"qualquer coisa",
  "imagem":"/stylesheets/img/elaine.jpg"
 },
 {
  "nome":'Elaine',
  "descricao":"qualquer coisa",
  "imagem":"/stylesheets/img/elaine.jpg"

 },
 {
  "nome":'Elaine',
  "descricao":"qualquer coisa",
  "imagem":"/stylesheets/img/elaine.jpg"

 },
 {
  "nome":'Elaiane',
  "descricao":"qualquer coisa",
  "imagem":"/stylesheets/img/elaine.jpg"

 }
 ]);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/buscaPessoas', (req, res) => res.render('pages/buscaPessoas'))
  .get('/buscaCampeonato', (req, res) => res.render('pages/buscaCampeonato'))
  .get('/paginadelogin', (req, res) => res.render('pages/paginadelogin'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
