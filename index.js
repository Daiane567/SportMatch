const bodyParser = require("body-parser")
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const { SHA3 } = require('sha3');
const hash = new SHA3(224);


const lib = require("./scripts/login");
if (typeof Storage === "undefined" || Storage === null) {
    var JSONStorage = require("node-localstorage").JSONStorage;
    Storage = new JSONStorage("./dados");
}

if (typeof StorageSenhas === "undefined" || StorageSenhas === null) {
    var JSONStorage = require("node-localstorage").JSONStorage;
    StorageSenhas = new JSONStorage("./dados/senhas");
}

Storage.setItem('pessoas', [{
        "nome": 'Elaine',
        "descricao": "Me chamo Elaine tenho 32 anos, sou da cidade do Rio de Janeiro. Prático Futevôlei e Caminhada e busco parceiros para pratica de minhas modalidades. Tenho disponibilidade para pratica de esportes diariamente após as 18h00.",
        "imagem": "/stylesheets/img/elaine.jpg"
    },
    {
        "nome": 'Marcos',
        "descricao": "Sou Marcos tenho 42 anos, moro na cidade de Belo Horizonte, Pratico tênis e polo aquático. Minha disponibilidade para pratica de esportes é aos finais de semana na parte da manhã e tarde. Busco algum parceiro para partidas de tênis ou ingressar em uma equipe de polo aquático.",
        "imagem": "/stylesheets/img/marcos.jpg"

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
//console.log (Storage.getItem('pessoas'))//
StorageSenhas.setItem("maria@gmail.com", {
    "email": "maria@gmail.com",
    "senha": "23344",
})
console.log(StorageSenhas.getItem("maria@gmail.com").senha)
console.log(StorageSenhas.getItem("maria@gmail.com"))
StorageSenhas.setItem("pedro@gmail.com", {
    "email": " pedro@gmail.com",
    "senha": "277774",
})
console.log(StorageSenhas.getItem("pedro@gmail.com").senha)
console.log(StorageSenhas.getItem("pedro@gmail.com"))


express()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "ejs")
    .get("/", (req, res) => res.render("pages/index"))
    .get("/buscaPessoas", (req, res) => res.render("pages/buscaPessoas"))
    .get("/buscaEsportes", (req, res) => res.render("pages/buscaEsportes"))
    .get("/buscaCampeonato", (req, res) => res.render("pages/buscaCampeonato"))
    .get("/paginaCadastro", (req, res) => res.render("pages/paginaCadastro"))
    .get("/paginadelogin", (req, res) => res.render("pages/paginadelogin", { aviso: lib.mensagemDeAvisoLogin }))
    .post("/verificar", function(req, res) {
        if (lib.verificar(req.body.email, req.body.senha)) {
            res.redirect("/paginaCadastro")
        } else {
            res.redirect("/paginadelogin")
        }
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));