let valorUm;
let valorDois;
let operacao;

function selecionarNumero(button) {
    const numero = button.innerText;

    const display = document.getElementById("display");

    display.innerText += numero;
}

function somar() {
    const display = document.getElementById("display");

    const texto = display.innerText;
    const numero = Number.parseInt(texto);

    valorUm = numero;

    display.innerText = "";

    operacao = "somar"

}

function subtrair() {
    const display = document.getElementById("display");

    const texto = display.innerText;
    const numero = Number.parseInt(texto);

    valorUm = numero;

    display.innerText = "";

    operacao = "subtrair";
}

function multiplicar() {
    const display = document.getElementById("display");

    const texto = display.innerText;
    const numero = Number.parseInt(texto);

    valorUm = numero;

    display.innerText = "";

    operacao = "subtrair";
}

function dividir() {
    const display = document.getElementById("display");

    const texto = display.innerText;
    const numero = Number.parseInt(texto);

    valorUm = numero;

    display.innerText = "";

    operacao = "dividir";
}

function resultado() {
    const display = document.getElementById("display");

    const texto = display.innerText;
    const numero = Number.parseInt(texto);

    valorDois = numero;

    display.innerText = "";

    let resultado;

    if (operacao === "somar") {
        resultado = valorUm + valorDois;
    } else if (operacao === "subtrair") {
        resultado = valorUm - valorDois;
    } else if (operacao === "multiplicar") {
        resultado = valorUm * valorDois;
    } else {
        resultado = valorUm / valorDois;
    }

    display.innerText = resultado;
}

function apagar() {
    const display = document.getElementById("display");

    display.innerText = "";
}