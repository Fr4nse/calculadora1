const btnCalcular = document.getElementById('calcular')

btnCalcular.onclick = () => {

    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value

    const operacion = document.getElementById('operacion').value

    switch (operacion) {
        case 'Suma':
            calcular(num1, num2, operacion)
            break;
        case 'Resta':
            calcular(num1, num2, operacion)

            break;
        case 'Multiplicacion':
            calcular(num1, num2, operacion)

            break;
        case 'Division':
            calcular(num1, num2, operacion)

            break;
        case 'Potencia':
            calcular(num1, num2, operacion)

            break;
        case 'Modulo':
            calcular(num1, num2, operacion)
            break;


        default:
            break;
    }

}

function calcular(num1, num2, operacion) {
    let rta
    if (operacion === 'Suma') {
        rta = parseInt(num1) + parseInt(num2)
    } else if (operacion === 'Resta') {
        rta = parseInt(num1) - parseInt(num2)
    } else if (operacion === 'Multiplicacion') {
        rta = parseInt(num1) * parseInt(num2)
    } else if (operacion === 'Division') {
        rta = parseFloat(num1) / parseFloat(num2)
    } else if (operacion === 'Potencia') {
        rta = Math.pow(parseInt(num1), (parseInt(num2)))
    } else if (operacion === 'Modulo') {
        rta =  ((parseFloat(num1) % parseFloat(num2) ) + parseInt(num2) ) % parseFloat(num2)

    }


    const divRta = document.createElement('div')
    divRta.innerHTML = `El resultado de la : ${rta}`
    document.body.appendChild(divRta)



}