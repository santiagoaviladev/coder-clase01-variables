console.log("**** OPERACIONES ***")
// aritméticas 
// suma 

let x = 10;
let y = 20;
const z = x+y;

console.log("EL VALOR DE X + Y ", z);

// resta
let a = 10;
let b = 20;
const c = a-b;

console.log("EL VALOR DE A - B", c);


// multiplicación 

let f = 10;
let g = 20;
const h = f*g;

console.log("EL VALOR DE F x G", h);

// división 
let p = 10;
let q = 20;
const r = p/q;

console.log("EL VALOR DE P / Q", r);

//Con Strings
//Concatenación 
let primeraCadena = "HOLA, "
let segundaCadena = "MUNDO"
const pegadas = primeraCadena+segundaCadena;

console.log("CADENAS PEGADAS", pegadas);


// Sumar número a String 
let miCadena =" ESTO ES UNA CADENA ";
let miOtroNumero = 80;

const sumaStringYNumero = miCadena+miOtroNumero;

console.log("STRING + NUMERO", sumaStringYNumero);


// Sumar 2 strings como números 
let otraVariableCadena = Number("80");
let otraVariableCadena2 = Number("35");

const sumaDosCadenasNumeros = otraVariableCadena+otraVariableCadena2;

console.log("DOS CADENAS CON NUMEROS", sumaDosCadenasNumeros);


//Sumar 2 strings como números,  que no son números
let otraVariableCadena3 = Number("HOLA");
let otraVariableCadena4 = Number("35");

const sumaDosCadenasNumeros2 = otraVariableCadena3+otraVariableCadena4;

console.log("DOS CADENAS CON NUMEROS, NO NUMEROS", sumaDosCadenasNumeros2);
