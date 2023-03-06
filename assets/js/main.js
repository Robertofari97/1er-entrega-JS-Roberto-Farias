
let nombre = prompt('Ingrese nombre').toUpperCase();
let apellido = prompt('Ingrese apellido').toUpperCase();;
let Nacim = parseInt(prompt('Ingrese su año de nacimiento'));
let anioVigente =new Date().getFullYear(); 
let miEdad = anioVigente-Nacim

if (miEdad>= 18){
    alert('Su edad es:' + ' ' + miEdad + ' años, ' + 'Puede continuar con la cotizacion')
}else{
    alert('Su edad es:' + ' ' + miEdad + ' años, ' + 'Ud no podra cotizar pasajes, solamente consultarlos')
}

alert('Bienvenido: ' + nombre + ' ' + apellido + '!!' + ' '+ 'Ud esta a punto de cotizar / consultar pasajes a ciudades de Europa: Tenga en cuenta las tarifas de estadia maxima (mayor a 28 dias) que se detallan a continuacion, las mismas se incrementa un 10% por cada 7 dias menos de estadia: \n * Amsterdam: Desde 500.000 \n * Barcelona: Desde 450.000 \n * Berlin: Desde 600.000 ARS \n * Roma: Desde 400.000 ARS \n * Londres: Desde 700.000 ARS \n * Paris: Desde 600.000 ARS');


let seleccionDestino = Number(prompt('Seleccione una opcion: \n 1 - Amsterdam \n 2- Barcelona \n 3 - Berlin \n 4- Roma \n 5 - Londres \n 6- Paris '))
while (seleccionDestino != 1 && seleccionDestino != 2 && seleccionDestino != 3 && seleccionDestino != 4 && seleccionDestino != 5 && seleccionDestino != 6 ){
    alert ('Debe ingresar una opcion valida')
    seleccionDestino = Number(prompt('Seleccione una opcion: \n 1 - Amsterdam \n 2- Barcelona \n 3 - Berlin \n 4- Roma \n 5 - Londres \n 6- Paris '))
}

let seleccionpasajeros =Number(prompt('Seleccione la cantidad de pasajeros'));
while (seleccionpasajeros < 1 || !Number.isInteger(seleccionpasajeros)){
    alert ('Debe ingresar una opcion de pasajeros valida')
    seleccionpasajeros =Number(prompt('Seleccione la cantidad de pasajeros'));
}


for (let i = 1  ; i<= seleccionpasajeros; i++ ){
    let nombPasaj = prompt ('Ingresar Nombre y apellido del pasajero');
    alert('Pasajero Nro: ' + i + ' ' + 'Nombre y apellido:' + ' ' + nombPasaj);
}

let seleccionEstadia = Number(prompt('Seleccione dias entre la ida y la vuelta'));
while (seleccionEstadia < 1 || !Number.isInteger(seleccionEstadia)){
    alert ('Debe ingresar una opcion de Estadia valida')
    seleccionEstadia = Number(prompt('Seleccione dias entre la ida y la vuelta'));
}

const amsterdam = 500000
const barcelona = 450000
const berlin = 600000
const roma = 400000
const londres = 700000
const paris = 600000

let tarifa7d = 1.40
let tarifa14d = 1.30
let tarifa21d = 1.20
let tarifa28d = 1.10
let tarifaM28d = 1.00


// Funcion generica para todos los Destinos y Estadias
function PrecioTotal(precio, pasajeros, tarifa){
    var calculo = precio * pasajeros * tarifa
    alert('El precio final por ' + seleccionEstadia + ' dias y ' + seleccionpasajeros + ' pasajeros es: ARS' + ' ' +  calculo.toLocaleString('es-AR'))

}


if ((seleccionDestino > 0 && seleccionDestino < 7) && (seleccionpasajeros > 0) && (seleccionEstadia > 0)){
    switch (seleccionDestino){
        case 1:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                PrecioTotal(amsterdam, seleccionpasajeros, tarifa7d);
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14){
                PrecioTotal(amsterdam, seleccionpasajeros, tarifa14d);
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21){
                PrecioTotal(amsterdam, seleccionpasajeros, tarifa21d);
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28){
                PrecioTotal(amsterdam, seleccionpasajeros, tarifa28d);
            }else{
                PrecioTotal(amsterdam, seleccionpasajeros, tarifaM28d);
            }
            break; 
        case 2:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                PrecioTotal(barcelona, seleccionpasajeros, tarifa7d);
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14){
                PrecioTotal(barcelona, seleccionpasajeros, tarifa14d);
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21){
                PrecioTotal(barcelona, seleccionpasajeros, tarifa21d);
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28){
                PrecioTotal(barcelona, seleccionpasajeros, tarifa28d);
            }else{
                PrecioTotal(barcelona, seleccionpasajeros, tarifaM28d);
            }
            break; 
        case 3:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                PrecioTotal(berlin, seleccionpasajeros, tarifa7d);
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14){
                PrecioTotal(berlin, seleccionpasajeros, tarifa14d);
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21){
                PrecioTotal(berlin, seleccionpasajeros, tarifa21d);
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28){
                PrecioTotal(berlin, seleccionpasajeros, tarifa28d);
            }else{
                PrecioTotal(berlin, seleccionpasajeros, tarifaM28d);
            }
            break;
        case 4:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                PrecioTotal(roma, seleccionpasajeros, tarifa7d);
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14){
                PrecioTotal(roma, seleccionpasajeros, tarifa14d);
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21){
                PrecioTotal(roma, seleccionpasajeros, tarifa21d);
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28){
                PrecioTotal(roma, seleccionpasajeros, tarifa28d);
            }else{
                PrecioTotal(roma, seleccionpasajeros, tarifaM28d);
            }
            break;
        case 5:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                PrecioTotal(londres, seleccionpasajeros, tarifa7d);
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14){
                PrecioTotal(londres, seleccionpasajeros, tarifa14d);
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21){
                PrecioTotal(londres, seleccionpasajeros, tarifa21d);
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28){
                PrecioTotal(londres, seleccionpasajeros, tarifa28d);
            }else{
                PrecioTotal(londres, seleccionpasajeros, tarifaM28d);
            }
            break;
        case 6:
            if(seleccionEstadia >= 1 && seleccionEstadia <= 7){
                PrecioTotal(paris, seleccionpasajeros, tarifa7d);
            }else if (seleccionEstadia >= 8 && seleccionEstadia <= 14){
                PrecioTotal(paris, seleccionpasajeros, tarifa14d);
            }else if (seleccionEstadia >= 15 && seleccionEstadia <= 21){
                PrecioTotal(paris, seleccionpasajeros, tarifa21d);
            }else if (seleccionEstadia >= 22 && seleccionEstadia <= 28){
                PrecioTotal(paris, seleccionpasajeros, tarifa28d);
            }else{
                PrecioTotal(paris, seleccionpasajeros, tarifaM28d);
            }
            break;                     
    default:
            break;                                 
    }
}else{
    alert('Datos cargados incorrectos')
}

alert('Muchas gracias por haber realizado la cotizacion')