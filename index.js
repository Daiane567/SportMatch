const { Console } = require("console");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
if (typeof Storage === "undefined" || Storage === null) {
  var JSONStorage = require("node-localstorage").JSONStorage;
  Storage = new JSONStorage("./dados");
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

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/buscaPessoas", (req, res) => res.render("pages/buscaPessoas"))
  .get("/buscaEsportes", (req, res) => res.render("pages/buscaEsportes"))
  .get("/buscaCampeonato", (req, res) => res.render("pages/buscaCampeonato"))
  .get("/paginaCadastro", (req, res) => res.render("pages/paginaCadastro"))
  .get("/paginadelogin", (req, res) => res.render("pages/paginadelogin"))
  .get("/perfilUsuario", (req, res) => res.render("pages/perfilUsuario"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  {
    ViewBag.Title = "Index";
}
<h2>Clientes</h2>
<p>
   <button class="btn btn-success create">Criar Novo Cliente <i class="glyphicon glyphicon-open"></i></button>
</p>
<table class="table">
    <tr>
        <th>@Html.DisplayNameFor(model => model.Nome)</th>
        <th>@Html.DisplayNameFor(model => model.Email)</th>
        <th>@Html.DisplayNameFor(model => model.Idade)</th>
        <th>@Html.DisplayNameFor(model => model.Pais)</th>
        <th></th>
    </tr>
    @foreach (var item in Model)
    {
        <tr>
            <td>@Html.DisplayFor(modelItem => item.Nome)</td>
            <td>@Html.DisplayFor(modelItem => item.Email)</td>
            <td>@Html.DisplayFor(modelItem => item.Idade)</td>
            <td>@Html.DisplayFor(modelItem => item.Pais)</td>
            <td>
             <button class="btn btn-success details" data-id="@item.ClienteId"><i class="glyphicon glyphicon-file"></i></button>
             <button class="btn btn-danger delete" data-id="@item.ClienteId"><i class="glyphicon glyphicon-trash"></i></button>
             <button class="btn btn-primary edit" data-id="@item.ClienteId"><i class="glyphicon glyphicon-edit"></i></button>
            </td>
        </tr>
    }
</table>
<div id="modal" class="modal fade" role="dialog" />

@section scripts{
    <script>
        $(function () {
            $(".details").click(function () {
                var id = $(this).attr("data-id");
                alert(id);
                $("#modal").load("Details?id=" + id, function () {
                    $("#modal").modal();
                })
            });

            $(".edit").click(function () {
                var id = $(this).attr("data-id");
                alert(id);
                $("#modal").load("Edit?id=" + id, function () {
                    $("#modal").modal();
                })
            });

            $(".delete").click(function () {
                var id = $(this).attr("data-id");
                alert(id);
                $("#modal").load("Delete?id=" + id, function () {
                    $("#modal").modal();
                })
            });

           $(".create").click(function () {
                $("#modal").load("Create", function () {
                    $("#modal").modal();
                })
            });

        })
    </script>
}
