var submit = document.getElementById('submit')
 submit.addEventListener('click', (events) => {
    events.preventDefault()
    
    var mercadoria = document.getElementById('merchandise');
    var preco = document.getElementById('price');

    if (mercadoria.value == '') {
      alert('oi')
    }
 })