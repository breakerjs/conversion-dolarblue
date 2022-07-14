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
                    `<h6 style="margin-top:30px;">El valor del dolar blue es: ${data.blue.value_sell}$ars 💹</h6>`
                const calculo = document.getElementById('valorCalculo').value * data.blue.value_sell
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
// creacion de chart con datos historicos
function createChart() {
    fetch(historicData, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
                const ctx = document.getElementById('chart').getContext('2d');
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.meses.map(item => item.anio + '-' + item.mes),
                        datasets: [{
                            label: 'Dolar Blue Historico',
                            data: data.meses.map(item => item.valor),
                            backgroundColor: [
                                'rgba(104, 169, 234, 1)'
                            ],
                            borderColor: [
                                'rgba(104, 169, 234, 1)'
                            ],
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }


        )
}
// llamado a la funcion
createChart();
calculoDolar();