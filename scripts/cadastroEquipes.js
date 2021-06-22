var mensagemDeAvisoLogin = { mensagem: "" }

function cadastroEquipes(equipesbd) {
    console.log("passou aqui 2", equipesbd)

    if (undefined === Storage.getItem('equipes')) {
        Storage.setItem('equipes', equipesbd); //é uma variavel que armazena o que está dentro da chave pessoa.

    } else {
        var equipes = Storage.getItem('equipes'); //é uma variavel que armazena o que está dentro da chave pessoa.
        equipes.push({ //vai armazenar um novo objeto dentro da memoria(array).
            "equipes": equipesbd,

        });
        console.log(equipes);
        //no nosso caso é um array

        //memoria volatil RAM 
        console.log(equipes[equipes.length - 1]); //vai me mostrar a ultima posição do array.

        //memoria persistente HD
        console.log(Storage.getItem('equipes')[Storage.getItem('equipes').length - 1]) //vai pegar no Storage a chave pessoas e me dar a ultima posição do array que está la dentro.
        Storage.setItem('equipes', equipes); //peguei da memoria RAM e passei para HD atravez do setItem.
    }
}


module.exports = { cadastroEquipes }
module.exports.mensagemDeAvisoLogin = mensagemDeAvisoLogin;