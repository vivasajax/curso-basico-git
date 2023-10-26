nombre = "Nicolás" ;

var nombre = "Nicolás" ; 

let segundonombre = "Mateo" ; // se puede asignar

const apellido = "Vivas" ;// no se puede asignar

// ripos de datos

// string

let nombre = " Nicolás Mateo Vivas" ;
let direccion = "Calle 162 #54-56" ;
let correo = "nico.vivascrus@gmail.com" ;

//number

let edad = 24 ;
let peso = 70.5 ;
let telefono = 3185235549 ;

// bolean

let EsMayorEeEdad = true ;
let EsMenorDeEdad = false ;

// undefined

let ReporteDataCredito ;

//null

let VariableNula = null ;


// array, arreglos, vectores, matrices

let nombres = [ "Juan", "Luis", "Oscar"];
let edades = [ 25, 30, 20, 18];
let baloto = [1, 5, 8, 7, 9];
let datos =["Juan", 25, 7];

//objetos objects
let persona = {
    nombre: "Juan",
    edad: 25,
    Sexo: "M"
    EsMayorEeEdad: true
    ReporteDataCredito: null
    ReporteSisben: undefined,
    coloresFavoritos: ["rojo", "azul", "verde"]
    fechadenacimiento: {
        dia: 15,
        mes: 12,
        año: 1995
    semanasCotizadas
    }

}
fechaExpedición: " 2020-01-1999"
fechaVencimiento: new Date 

//una persona puede entrar a un bar si

let  EsMayorEeEdad = 18;

let edadPersona = persona.edad;

if (edadPersona <= EsMayorEeEdad) { 
    console.log ("puede entrar al bar");
} else {
    console. log ("no pyede entrar al bar");
}
const edadPensionMasculina = 62;
const edadPensionFemenina = 57;

if(persona.edad > edadPenson masculina && persona.sexo == "M" && persona.semanasCotizadas)
console.info ("puede pensionarse") ;
else { console.error("no se puede pensionar");

}

//switch case

let dia = "lunes";

switch (dia) {
    cconst dia = "lunes"; // Reemplaza "lunes" por el día actual

    switch (dia) {
        case "lunes":
            console.log("Hoy es lunes.");
            break;
        case "martes":
            console.log("Hoy es martes de oración.");
            break;
        case "miércoles":
            console.log("Hoy es miércoles de vigilia.");
            break;
        case "jueves":
            console.log("Hoy es jueves de evangelización");
            break;
        case "viernes":
            console.log("Hoy es viernes es de la biblia.");
            break;
        default:
            console.log("No es un día válido.");
            break;
    }
    
}

// operador ternario

if(oersiba.sexo == "M"){
    console.log("es un hombre");
}else{
    console.log(" es una mujer o no binario");
}

// esto es similiar al bloque anterior
persona.sexo == "M" ? console.log("es un hombre") : console.log("Es una mujer");

persona.semanasCotizadas >= 1300 && persona.edad >= edadPensionMasculina && persona.sexo == "M" ? console.log("se puede pensionar") : console.log("no se puede pensionar");
persona.cedula || persona.pasaporte ? console.log("puede salir del pais") : console.log("no puedes salir del país");

// ciclos, bucles, loops

// for

for (let contador = 1; contador <= 5; contador++) {
    if (contador === 1) {
        console.log("un elefante se balanceaba");
    } else {
        console.log(contador + " elefantes se balanceaban sobre");
    }
}


