const bodyParser = require("body-parser")
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const { SHA3 } = require('sha3');
const hash = new SHA3(224);

const libCadastro = require("./scripts/paginaCadastro");
const libEquipe = require("./scripts/cadastroEquipes");
//const libTorneios = require("./scripts/cadastroTorneios");
const lib = require("./scripts/login");
if (typeof Storage === "undefined" || Storage === null) {
    var JSONStorage = require("node-localstorage").JSONStorage;
    Storage = new JSONStorage("./dados");
}

if (typeof StorageSenhas === "undefined" || StorageSenhas === null) {
    var JSONStorage = require("node-localstorage").JSONStorage;
    StorageSenhas = new JSONStorage("./dados/senhas");
}


//console.log (Storage.getItem('pessoas'))//
StorageSenhas.setItem("teste@gmail.com", {
    "email": "teste@gmail.com",
    "senha": "12345",
})
console.log(StorageSenhas.getItem("teste@gmail.com").senha)
console.log(StorageSenhas.getItem("teste@gmail.com"))


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
    .get("/cadastroEquipes", (req, res) => res.render("pages/cadastroEquipes"))
    .get("/cadastroTorneios", (req, res) => res.render("pages/cadastroTorneios"))
    .get("/buscaEquipes", (req, res) => res.render("pages/buscaEquipes"))
    .get("/paginadelogin", (req, res) => res.render("pages/paginadelogin", { aviso: lib.mensagemDeAvisoLogin }))
    .post("/verificar", function(req, res) {
        if (lib.verificar(req.body.email, req.body.senha)) {
            res.redirect("/paginaCadastro")
        } else {
            res.redirect("/paginadelogin")
        }
    })

.post("/paginaCadastro", function(req, res) {
    console.log(req.body);
    libCadastro.paginaCadastro(req.body.nome, req.body.endereco, req.body.cidade, req.body.descricao)
})

.post("/cadastroEquipes", function(req, res) { //cadastroEquipes
    console.log("passouequ", req.body['equipes[]']);
    libEquipe.cadastroEquipes(req.body['equipes[]']);
})

//.post("/cadastroTorneios", function(req, res) {
//   console.log("passou 3", req.body['torneios[]']);
//   libTorneios.cadastroTorneios(req.body['torneios[]'])
//})

.listen(PORT, () => console.log(`Listening on ${PORT}`));