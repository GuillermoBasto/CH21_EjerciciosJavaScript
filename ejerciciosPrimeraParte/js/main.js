/// Aquí se irán agregando las soluciones a los ejercicios de Javascript para soluciones.

////////////////////////  Función ejercicio #1  ////////
let numeroMayor = 0;
let arregloNum1 = [3, 5, 7, 1, 6];

function encuentraMayor (arreglo){
    for (let i=0; i<arreglo.length;i++){
        if (arreglo[i]>numeroMayor)
            numeroMayor=arreglo[i];
    }
    return numeroMayor;
}

// Resultado Ejercicio #1
let res1 = encuentraMayor(arregloNum1);
console.log(`El numero Mayor es: ${res1}`);

////////////////////////  Función ejercicio #2  ////////////////
let numeroMenor = Number.MAX_VALUE;
let arregloNum2 = [-1, 3, 4, 2, 6];

function encuentraMenor (arreglo){
    for (let i=0; i<arreglo.length;i++){
        if (arreglo[i]<numeroMenor)
            numeroMenor=arreglo[i];
    }
    return numeroMenor;
}

// Resultado Ejercicio #1
let res2 = encuentraMenor(arregloNum2);
console.log(`El numero Menor es: ${res2}`);


////////////////////////  Función #3  ////////////////
let caso1 = [1, 22, 5, 17, 10, 5, 40, 5, 7];
let caso2 = [7, 41, 5, 7, 10, 13, 2];
let caso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let rep = 0;
let cont = 0;
let numeroMasRepetido = 0;

function revisaRepetidos (arreglo){
    for (let i=0; i<arreglo.length; i++){
        //console.log(i)
        //console.log(arreglo[i]);
        for (let j=0; j<arreglo.length; j++){
            //console.log(j)
            if (arreglo[i]==arreglo[j]&&(i!=j&&i<j)){
                rep++;
                //console.log(rep);
            }
        }
        if (rep>cont) {
            cont = rep;
            numeroMasRepetido = arreglo[i];
        }
    }
    if (rep==0){
        return `no hay numeros repetidos`;
    }else{
        rep=0;
        cont=0;
        return numeroMasRepetido;
    }
}

// Resultado Ejercicio #3
let res3 = revisaRepetidos (caso1);
console.log(`En el caso 1 el numero ${res3} aparece mas de 1 vez`);
let res4 = revisaRepetidos (caso2);
console.log(`En el caso 2 el numero ${res4} aparece mas de 1 vez`);
let res5 = revisaRepetidos (caso3);
console.log(res5);


////////////////////////  Función ejercicio #4  ////////
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let entrada = [1, 2, 5, 14, 24, 31, 50, 105];
let numeroRandom = 0;

function desordena (arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        let numeroRandom = getRandomInt(arreglo.length);
        let temporal = arreglo[i];
        arreglo[i]= arreglo[numeroRandom];
        arreglo[numeroRandom] = temporal;
    }
    //console.log(arreglo);
    return arreglo;
}

// Resultado Ejercicio #4
let res6 = desordena(entrada);
console.log(`La cadena desordenada queda así: ${res6}`);