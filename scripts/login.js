var mensagemDeAvisoLogin = { mensagem: "" }

function verificar(email, senhaaverificar) {
    if (StorageSenhas.getItem(email) == undefined) {
        mensagemDeAvisoLogin.mensagem = "email invalido"
        console.log("passou por aqui");
        return false;
    }


    if (StorageSenhas.getItem(email).senha == senhaaverificar) {
        return true;
    } else {
        mensagemDeAvisoLogin.mensagem = "senha invalida"
        console.log("passou por aqui senha");
        return false;

    }
}

module.exports = { verificar }
module.exports.mensagemDeAvisoLogin = mensagemDeAvisoLogin;