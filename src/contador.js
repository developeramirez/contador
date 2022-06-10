var aumento = document.getElementById('aumento');
var decremento = document.getElementById('decremento');
var reset = document.getElementById('reset');
var input = document.getElementById('valor');
aumento.addEventListener('click', function (evento) {
    evento.preventDefault();
    var numero = parseInt("".concat(input.value));
    numero = numero + 1;
    if (numero > 0) {
        input.value = numero;
        input.style.background = "#2c782f";
    }
    else if (numero < 0) {
        input.value = numero;
        input.style.background = "#bf0202";
        input.style.color = "#ffffff";
    }
    else if (numero == 0) {
        input.value = numero;
        input.style.background = "#400663";
        input.style.color = "#ffffff";
    }
});
decremento.addEventListener('click', function (evento) {
    evento.preventDefault();
    var numero = parseInt("".concat(input.value));
    numero = numero - 1;
    if (numero > 0) {
        input.value = numero;
        input.style.background = "#2c782f";
    }
    else if (numero < 0) {
        input.value = numero;
        input.style.background = "#bf0202";
        input.style.color = "#ffffff";
    }
    else if (numero == 0) {
        input.value = numero;
        input.style.background = "#400663";
        input.style.color = "#ffffff";
    }
});
reset.addEventListener('click', function (evento) {
    evento.preventDefault();
    var numero = parseInt("".concat(input.value));
    input.value = 0;
    if (numero == 0) {
        input.style.background = "#400663";
        input.style.color = "#ffffff";
    }
});
