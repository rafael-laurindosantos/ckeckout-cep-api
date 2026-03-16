function buscarCep() {
    let cep =
    document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dados) {
            if (dados.erro) {
                alert("CEP não encontrado!");
                limparCampos();
                return;
            }

    document.getElementById('rua').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;
    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('estado').value = dados.uf;

    document.getElementById('numero').disabled = false;
    document.getElementById('complemento').disabled = false;
    document.getElementById('btn-finalizar').disabled = false;

    document.getElementById('numero').focus();


        })
        .catch(function(erro) {
            alert("Erro na busca. Digite apenas números!");
            
        });
    }

function limparCampos() {
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('complemento').value = '';

    document.getElementById('numero').disabled = true;
    document.getElementById('complemento').disabled = true;
    document.getElementById('btn-finalizar').disabled = true;
}

    document.getElementById('cep').addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        buscarCep();
    }
})

function finalizarPedido () {
    let numero = document.getElementById('numero').value;
    let rua = document.getElementById('rua').value;

    if (numero === '') {
        alert("Atenção: Por favor, digite o número da casa para entrega.");
        document.getElementById('numero').focus();
        return;
    }

    alert(`Compra realizada com sucesso! \nO seu pedido será entregue em: ${rua}, nº ${numero}.`);

    limparCampos ();
}