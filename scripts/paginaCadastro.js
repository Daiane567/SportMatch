var mensagemDeAvisoLogin = { mensagem: "" }

function paginaCadastro(nome, endereco, cidade, descricao) {
    console.log(nome, endereco, cidade, descricao);
    var pessoas = Storage.getItem('pessoas'); //é uma variavelmeoria (RAM) que armazena o que está dentro da chave pessoa.
    //no nosso caso é um array.


    pessoas.push({ //vai armazenar um novo objeto dentro da memoria(array).
        "nome": nome,
        "descricao": descricao,
        "imagem": "/stylesheets/img/marcos.jpg"
    });
    //memoria volatil RAM 
    console.log(pessoas[pessoas.length - 1]); //vai me mostrar a ultima posição do array.

    //memoria persistente HD
    console.log(Storage.getItem('pessoas')[Storage.getItem('pessoas').length - 1]) //vai pegar no Storage a chave pessoas e me dar a ultima posição do array que está la dentro.
    Storage.setItem('pessoas', pessoas); //peguei da memoria RAM e passei para HD atravez do setItem.
} //           memoria(Hd)       (Ram)

module.exports = { paginaCadastro }
module.exports.mensagemDeAvisoLogin = mensagemDeAvisoLogin;