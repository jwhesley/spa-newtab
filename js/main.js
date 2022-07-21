//validação de preenchimentos obrigatorios no form
var submit = document.getElementById('submit')
 submit.addEventListener('click', (events) => {
    events.preventDefault()
    
    var selecao =  document.getElementById('transaction').value;
    var mercadoria = document.getElementById('merchandise').value;
    var preco = document.getElementById('price').value;

    if(selecao == "seleciona") {
      alert("Selecione o tipo de transação");
      return false;
    }

    if(mercadoria == "") {
      alert("Preencha o nome da mercadoria");
      return false;
    }
    if(preco == "") {
      alert("Preencha o valor");
      return false;
    }
 })