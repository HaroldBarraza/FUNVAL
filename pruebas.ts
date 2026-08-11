let bateria: number = 100;

if (bateria < 20 ) {
    console.log(`cargue el sipositivo, bateria esta al ${bateria}%`);
}else{
    console.log(`bateria esta en optimas condiciones`);
}


let preguntas:number = 10;
let correctas:number = 6;

if(correctas > preguntas/2){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

let VIP:boolean = true;
let compras:number = 100;

VIP === true 
? console.log(`su total es de ${compras - (compras * 0.15)} usted recibio un descuento del 15%`)
: console.log(`su total es de ${compras}`);

let codigo:number = 100

codigo === 200
? console.log(`EXITO`)
: console.log(`ERROR`);

let tipo_vehiculo:string = "A";

switch(tipo_vehiculo){
    case "AUTO":
        console.log(`usted necesita pagar 10Bs`)
        break
    case "BICICLETA":
        console.log(`usted necesita pagar 2Bs`)
        break
    case "BUS":
        console.log(`usted necesita pagar 25Bs`)
        break
    default:
        console.log(`-1`)
        break
}

let tecla:string = "W"

switch(tecla){
    case "W":
        console.log(`arriba`)
        break
    case "D":
        console.log(`derecha`)
        break
    case "A":
        console.log(`izquierda`)
        break
    case "S":
        console.log(`abajo`)
        break
}