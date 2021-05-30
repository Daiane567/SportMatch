const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000
if (typeof Storage === "undefined" || Storage === null) {
    var JSONStorage = require('node-localstorage').JSONStorage;
    Storage = new JSONStorage('./dados');
}
Storage.setItem('pessoas', [{
        "nome": 'Carlos',
        "descricao": "qualquer coisa",
        "imagem": "/stylesheets/img/carlos.jpg"
    },
    {
        "nome": 'Elaine',
        "descricao": "qualquer coisa",
        "imagem": "/stylesheets/img/elaine.jpg"
    },
    {
        "nome": 'Fernanda',
        "descricao": "qualquer coisa",
        "imagem": "/stylesheets/img/fernanda.png"
    },
    {
        "nome": 'Flavia',
        "descricao": "qualquer coisa",
        "imagem": "/stylesheets/img/flavia.jpg"
    },
    {
        "nome": 'Rogério',
        "descricao": "qualquer coisa",
        "imagem": "/stylesheets/img/rogerio.jpg"
    }
]);

/*if (typeof Storage === "undefined" || Storage === null) { <!-- NÃO ESTA FUNCIONANDO, TEMOS QUE DESCOBRIR O MOTIVO -- ANA -->
    var JSONStorage = require('node-localstorage').JSONStorage;
    Storage = new JSONStorage('./dados');
}
Storage.setItem('esportes', [{
    "nome": 'Futebol',
    "descricao": "Futebol qualquer coisa",
    "imagem": "/stylesheets/img/futebol.jpg"
},
{
    "nome": 'Futevolei',
    "descricao": "Futevolei qualquer coisa",
    "imagem": "/stylesheets/img/futevolei.jpg"
},
{
    "nome": 'Futsal',
    "descricao": "Futsal qualquer coisa",
    "imagem": "/stylesheets/img/futsal.jpeg"
},
{
    "nome": 'Vôlei',
    "descricao": "Vôlei qualquer coisa",
    "imagem": "/stylesheets/img/volei.png"
},
]);*/

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/buscaPessoas', (req, res) => res.render('pages/buscaPessoas'))
    .get('/buscaEsportes', (req, res) => res.render('pages/buscaEsportes'))
    .get('/buscaCampeonato', (req, res) => res.render('pages/buscaCampeonato'))
    .get('/paginadelogin', (req, res) => res.render('pages/paginadelogin'))
    .get('/perfilUsuario', (req, res) => res.render('pages/perfilUsuario'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))