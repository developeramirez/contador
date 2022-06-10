var aumento = document.getElementById('aumento');
var input = document.getElementById('valor');
aumento.addEventListener('click', function (evento) {
    evento.preventDefault();
    var valor = document.getElementById('valor');
    var numero = parseInt(valor);
    input.innerHTML = numero;
});
