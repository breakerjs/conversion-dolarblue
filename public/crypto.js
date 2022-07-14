'use strict'
// url de la api
const btc = 'https://criptoya.com/api/bitso/btc/usd/500'
const eth = 'https://criptoya.com/api/bitso/eth/usd/500'
// funcion para calcular y mostrar valor de dolar blue
function calculoDolar() {
    document.getElementById('conversion').addEventListener('click', () => {
        if(document.getElementById('cryptoChoose').value == 'text-1'){
            fetch(btc)
            .then(response => response.json())
            .then(data => {
                let resultado = document.getElementById('resultadoIva')
                if (data.length = '') {
                    resultado.innerHTML =
                        `<h6 style="margin-top:30px;">Error: No se encuentran datos JSON ❌</h6>`
                }
                resultado.innerHTML =
                    `<h6 style="margin-top:30px;">El valor del Bitcoin evaluado es: ${data.ask}$USD 🤘</h6>`
                const calculo = document.getElementById('valorCalculo').value * data.ask
                resultado.innerHTML += `<h5>Resultado: ${calculo.toFixed(4)}$USD</h5>`
                setInterval(() => {
                    resultado.innerHTML = ''
                },10000)

            })
        } else if(document.getElementById('cryptoChoose').value == 'text-2'){
            fetch(eth)
            .then(response => response.json())
            .then(data => {
                let resultado = document.getElementById('resultadoIva')
                if (data.length = '') {
                    resultado.innerHTML =
                        `<h6 style="margin-top:30px;">Error: No se encuentran datos JSON ❌</h6>`
                }
                resultado.innerHTML =
                    `<h6 style="margin-top:30px;">El valor de Ethereum evaluado es: ${data.ask}$USD 🤘</h6>`
                const calculo = document.getElementById('valorCalculo').value * data.ask
                resultado.innerHTML += `<h5>Resultado: ${calculo.toFixed(2)}$USD</h5>`
                setInterval(() => {
                    resultado.innerHTML = ''
                },10000)
            })
        }
    })
}
// evento para prevenir el uso de signos en el input (-, .) --copiado regex
const $input = document.querySelector("#valorCalculo");
const BIRTHNUMBER_ALLOWED_CHARS_REGEXP = /[0-9\/.]+/;
$input.addEventListener("keypress", e => {
    if (!BIRTHNUMBER_ALLOWED_CHARS_REGEXP.test(e.key)) {
        e.preventDefault();
    }
}); // --copiado regex
// llamado a la funcion
calculoDolar();