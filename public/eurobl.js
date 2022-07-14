'use strict'
// url de la api
const url = 'https://api.bluelytics.com.ar/v2/latest'
const historicData = 'https://apiarg.herokuapp.com/api/evolucion/dolarblue'
// funcion para calcular y mostrar valor de dolar blue
function calculoDolar() {
    document.getElementById('conversion').addEventListener('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let resultado = document.getElementById('resultadoIva')
                if (data.length = '') {
                    resultado.innerHTML =
                        `<h6 style="margin-top:30px;">Error: No se encuentran datos JSON ❌</h6>`
                }
                resultado.innerHTML =
                    `<h6 style="margin-top:30px;">El valor del euro blue es: ${data.blue_euro.value_sell}$ars 💹</h6>`
                const calculo = document.getElementById('valorCalculo').value * data.blue_euro.value_sell
                resultado.innerHTML += `<h5>Resultado: ${calculo.toFixed(2)}$ars</h5>`
                setInterval(() => {
                    resultado.innerHTML = ''
                },10000)
            })
    })
}
// evento para prevenir el uso de signos en el input (-, .) --copiado regex
const $input = document.querySelector("#valorCalculo");
const BIRTHNUMBER_ALLOWED_CHARS_REGEXP = /[0-9\/]+/;
$input.addEventListener("keypress", e => {
    if (!BIRTHNUMBER_ALLOWED_CHARS_REGEXP.test(e.key)) {
        e.preventDefault();
    }
}); // --copiado regex

calculoDolar();