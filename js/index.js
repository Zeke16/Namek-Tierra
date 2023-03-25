//formulario donde se recibe la cantidad de terricolas
const formularioTerricolas = document.getElementById('terricolas');


//contenedor de viajes y sus saltos finales
const viajesTerricolas = document.getElementById('viajesTerricolas')

formularioTerricolas.addEventListener('submit', (e) => {
    e.preventDefault();
    viajesTerricolas.innerHTML = ''

    const cantidadTerricolas = document.getElementById('cantidadTerricolas').value
    console.log(cantidadTerricolas)
    let numeroViaje = 1

    for (numeroViaje; numeroViaje <= cantidadTerricolas; numeroViaje++) {

        let numeroElecto = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
        calcularSaltosTerricolas(numeroElecto, numeroViaje)

    }
})

function calcularSaltosTerricolas(_numeroElecto, _numeroViaje) {
    let numeroSaltos = 0
    const numero = _numeroElecto
    console.log("numero aleatorio " + _numeroElecto)
    do {
        if (_numeroElecto === 1) {
            viajesTerricolas.innerHTML +=
                "<div class='col-md-3 border'>"
                + "<p class='mt-2'>Viajero # <b>" + _numeroViaje + "</b></p>"
                + "<p class='mt-2'>Numero electo: <b>" + numero + "</b></p>"
                + "<p class='mt-2'>Cantidad de saltos realizados: <b>" + numeroSaltos + "</b></p>"
                + "</div>"
            break;
        } else if (_numeroElecto > 1) {
            _numeroElecto = moduloNumeroPar(_numeroElecto)
            numeroSaltos++
        }
    } while (_numeroElecto >= 1)
}

function moduloNumeroPar(num) {
    if ((num % 2) === 0) {
        return (num / 2)
    } else {
        return moduloNumeroImpar(num)
    }
}

function moduloNumeroImpar(num) {
    if ((num % 2) !== 0) {
        return (num * 3) + 1
    }
}

