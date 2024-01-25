let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = []
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else
        //Si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    asignarTextoElemento('h1', 'Juego del numero secreto');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();
