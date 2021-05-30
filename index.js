const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000
if (typeof Storage === "undefined" || Storage === null) {
    var JSONStorage = require('node-localstorage').JSONStorage;
    Storage = new JSONStorage('./dados');
}
Storage.setItem('pessoas', [{
        "nome": 'Elaine',
        "descricao": "Me chamo Elaine tenho 32 anos, sou da cidade do Rio de Janeiro. Prático Futevôlei e Caminhada e busco parceiros para pratica de minhas modalidades. Tenho disponibilidade para pratica de esportes diariamente após as 18h00.",
        "imagem": "/stylesheets/img/elaine.jpg"
    },
    {
        "nome": 'Marcos',
        "descricao": "Sou Marcos tenho 42 anos, moro na cidade de Belo Horizonte, Pratico tênis e polo aquático. Minha disponibilidade para pratica de esportes é aos finais de semana na parte da manhã e tarde. Busco algum parceiro para partidas de tênis ou ingressar em uma equipe de polo aquático.",
        "imagem": "/stylesheets/img/elaine.jpg"

    },
    {
        "nome": 'Mariana',
        "descricao": "Meu nome é Mariana tenho 22 anos, resido na cidade de São Paulo. Pratico vôlei e participo de corridas de 4 km. Tenho disponibilidade para pratica de esportes segunda, quarta e sexta das 13h00 até 17h00. Busco formar uma equipe para disputar competições amadoras de vôlei  e parceiros para participação em corridas urbanas até 6 km.",
        "imagem": "/stylesheets/img/elaine.jpg"

    },
    {
        "nome": 'Juliano',
        "descricao": "Me chamo Juliano tenho 29 anos, pratico futebol, basquete e natação. Tenho disponibilidade para pratica esportiva todos os dias pela manhã (das 08h00 até 12h00). Busco parceiros para treinos diários em qualquer modalidade em comum.",
        "imagem": "/stylesheets/img/elaine.jpg"

    }
]);

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/buscaPessoas', (req, res) => res.render('pages/buscaPessoas'))
    .get('/buscaEquipes', (req, res) => res.render('pages/buscaEquipes'))
    .get('/buscaCampeonato', (req, res) => res.render('pages/buscaCampeonato'))
    .get('/paginadelogin', (req, res) => res.render('pages/paginadelogin'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))