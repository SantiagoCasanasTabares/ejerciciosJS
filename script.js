
/*
Strings
Math
Condicionales
*/

/*Condicionales-----------------------------------------------------------------------------------------------------------*/
/*if (num > 10) {
    //console.log(`el numero es ${num}`)
}else if(num < 10)  {
    console.log(`el numero es ${num+1}`)
}else {
    console.log(`el numero es igual a ${num}`)
};*/

/*const number = document.getElementById('numbers');
const result = document.getElementById('result');

let val1 = prompt("Introduzca el primer numero");
let val2 = prompt("Introduzca el segundo numero");
let val3 = prompt("Introduzca el tercer numero");

number.textContent = `Los numeros introducidos son ${val1}, ${val2}, ${val3}`

if (val1 >= val2 && val1 >= val3){
    if (val2 > val3) {
        result.textContent = `${val1}, ${val2}, ${val3}`
    }else if (val3 > val2) {
        result.textContent = `${val1}, ${val3}, ${val2}`
    }else{
        result.textContent = `${val1}, ${val3}, ${val2}`
    }
}else if (val2 >= val1 && val2 >= val3){
    if (val1 > val3) {
        result.textContent = `${val2}, ${val1}, ${val3}`
    }else if (val3 > val1) {
        result.textContent = `${val2}, ${val3}, ${val1}`
    }else{
        result.textContent = `${val2}, ${val3}, ${val1}`
    }
}else if (val3 >= val1 && val3 >= val2){
    if (val1 > val2) {
        result.textContent = `${val3}, ${val1}, ${val2}`
    }else if (val2 > val1) {
        result.textContent = `${val3}, ${val2}, ${val1}`
    }else{
        result.textContent = `${val3}, ${val2}, ${val1}`
    }
};*/

/*
*Expresiones switch simple-----------------------------------------------------------------------------------------------------
*/

/*switch(val1){
    case 1: 
        result.textContent = `usted introdujo el uno`
        break;
    case 2:
        result.textContent = `usted introdujo el dos`
        break;
    default:
        result.textContent = `usted introdujo el ${val1}`
};*/

/*
*Expresiones switch multiple-------------------------------------------------------------------------------------------------------


switch(val1){
    case 1:
    case 3:
        result.textContent = `el valor es 1 o 3`
        break;
    case 2:
    case 4:
        result.textContent = `el valor es 2 o 4`
        break;
    default:
        result.textContent = `usted introdujo el ${val1}`
};*/

/**
 * Operador ternario -------------------------------------------------------------------------------------------------------------
 
let val1 = 4;

(val1%2 == 0) ? console.log("Es par") : console.log("es impar");
*/

/**
 * Arrays --------------------------------------------------------------------------------------------------------------
 

let numeros = [1, 2, 3]
let palabras = ["hola", "tu"]

//console.log(`la palabra ${palabras[0]}, tiene ${palabras[0].length} letras`)

//console.log(numeros.join(" o ")) //escribir lista en strings separador por join("algo")

numeros.splice(0, 3, "yo", "yo")   // array.salice(a, [b], [c]) elimina los elementos a partir de a. opc: eliminar b elementos o reemplazarlos por elemneots c
console.log(numeros);*/

/**
 * Bucles while y do while----------------------------------------------------------------------------------------------


let contrasena = "";

while(contrasena != "hola") {
    contrasena = prompt("Introduzca la contrasena")
}

alert("Contrasena correcta") */

/**
 * Bucles for, for of y for in----------------------------------------------------------------------------------------------

let numeros = [1, 2, 3, 4, 5];

for(let numero of numeros) {
    console.log(numero*2)
}*/

/**
 * ejercicios--------------------------------------------------------------------------------------------------------
*/
/*let nombre = prompt("Introduce tu nombre");
let apellido = prompt("Introduce tu apellido");

console.log(`Hola ${nombre} ${apellido}`)*/

/*let figura = prompt("Introduce la figura");

if(figura.toLocaleLowerCase() == "triangulo") {
    let base = prompt("Base del triangulo");
    let altura = prompt("altura del triangulo");
    alert(`El area es ${base*altura/2}`)
}else if (figura.toLocaleLowerCase() == "cuadrado") {
    let base = prompt("Base del cuadrado");
    let altura = prompt("altura del cuadrado");
    alert(`El area es ${base*altura}`)
}else if(figura.toLocaleLowerCase() == "circulo") {
    let radio = prompt("radio del circulo");
    alert(`El area es ${Math.PI * radio * radio}`)
}*/

/*let esPrimo = "Es primo";
for(let i=1; i<=parseInt(numero); i++){
    if(i%2==0){
        console.log(`${i} es par`)
    }else{
        console.log(`${i} no es primo`)
    }
};

for(let i = 3; i < numero; i++){
    if(numero%i == 0){
        esPrimo = "no es primo"
        break
    }
};

console.log(esPrimo);*/

/*let numero = parseInt(prompt("Introduzca un numero"));
let factorial = 1
for(let i = numero; i>0; i--){
    factorial *= i; 
};

console.log(`${numero}! es igual a ${factorial}`)*/

/*let valor = 50;
let acum = 0;

while(acum < 50) {
    acum += parseInt(prompt("Introdzuca un numero"))
}
alert(`El resultado es ${acum}`)*/

/*let numeros = [];
let pares = [];
let impares = [];
let rand = 10;

while(numeros.length < 5) {
    let intr = parseInt(prompt("Introduzca un numero"));
    let numer = intr * Math.floor(Math.random()*rand)
    numeros.push(numer);

    if( numer%2 == 0){
        pares.push(numer);
    }else{
        impares.push(numer);
    }
}
console.log(`Los numeros fueron ${numeros}`)
console.log(`Los pares son ${pares}`)
console.log(`Los impares son ${impares}`)*/

/*const colores = ["azul", "verde", "rojo"];

let color = prompt("Elija un color");

alert(colores.includes(color.toLowerCase()));*/



