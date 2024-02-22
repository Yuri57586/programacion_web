var nombre= "ivan";
var edad=21;
var estatura=1.88;
const ESCUELA="Tecn de Roque"

let obj1={
    propiedad1:"valor1 ",
}
let obj2={
    propiedad2:"valor2 ",
}


let obj3={
    ...obj1,...obj2
}
console.table(obj3);


console.log("nombre:"+ nombre); 
console.log("edad:"+ edad); 
console.log("estatura:"+ estatura); 
console.log("Escuela:"+ ESCUELA); 

let string="";
let boolean=true;
let number=5;
let bigInt= BigInt(10);
let symbols=Symbol("simbolo");
let arrays=(1,2,3,4,5);
let objet={};


console.log(string);
console.log(boolean);
console.log(number);
console.log(bigInt);
console.log(symbols);
console.log(arrays);
console.log(objet);

let student ={
    name:"ivan",
    lastname:"salas",
    age: 21,
    topics:"programacion wed",
    assement:{
        webDevelopmern:10,
        Math:9,

    }


}
console.log(student);
console.table(student);
console.log(string,boolean,number,bigInt,symbols,arrays,objet);

//delete student.age;
//let nombre=student.nombre;
//let(name:nombre,age:edad,)=student;
//let{name1,...student2}=student;

// let nombreVariable="valor variable";

// var nombrevariable=10;


// let objeto = {
//     propiedad: 10,
//     propiedad4:"valor",

//     propiedadObjeto:{
//         propiedad5: ['valor','valor2','valor3'],
//         propiedad6: 'valor propiedad 5'
//     }

// };

// console.log(objeto);
// console.log(objeto.propiedad4);
// console.log(objeto.propiedadObjeto.propiedad5);


//funciones 


function nombre_funcion(nombree, apellido, edad){
    let text="nombre; "+ nombree +", apellido: "+ apellido +", edad: "+edad;
console.log(text);

}
//nombre_funcion();

nombre_funcion('ivan','salas',21);

// /**
//  * retorna el caudrado de el numero dado
//  * @param number number 
//  * @returns 
//  */
// function square(number){
//     return number*number
// }

// /**
//  * retorna el cubo de el numero dado
//  * @param number number 
//  * @returns 
//  */
// function cube(number){
//     return number*number*number;
// }


// console.log(square(8));
// console.log(cube(8));


//ciclosssss

//for
// for(let index = 0; index<11; index++){
//     let number= 10 * index;
//     console.log(number);
// }


// //while
// let indexWhile=0;
// while(indexWhile<11){
//     let number=indexWhile*10;
//     console.log(number);
//     indexWhile++;

// }


// //do while
// let indexDoWhile=0;
// do{
//     let number= indexDoWhile*10;
//     console.log(number);
//     indexDoWhile++;

// }while(indexDoWhile<10);

// /**
//  * retorna el cubo de el numero dado
//  * @param number number 
//  * @returns 
//  */
// function cube(number){
//     return number*number*number;
// }


let tabla;
function multiFor(ini,fin ){
    for(let index = 0; index<fin; index++){
          let number= ini * index;
          console.log(number);
}
}


function multiWhilr(ini,fin){
    let indexWhile=0;
 while(indexWhile<fin){
     let number=indexWhile*ini;
     console.log(number);
     indexWhile++;

 }
}

function multiDoWhile(ini,fin){
    let indexDoWhile=0;
 do{
     let number= indexDoWhile*ini;
     console.log(number);
     indexDoWhile++;

 }while(indexDoWhile<fin);
}

console.log(multiFor(8,100));
console.log(multiWhilr(8,10));
console.log(multiDoWhile(8,5));


