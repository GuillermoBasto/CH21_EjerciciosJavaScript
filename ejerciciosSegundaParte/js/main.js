///////////// Funciones para el ejercicio 1 y 2 //////////////////

function encuentraMayor (arreglo){
    let numeroMayor = 0;
    for (let i=0; i<arreglo.length;i++){
        if (arreglo[i]>numeroMayor)
            numeroMayor=arreglo[i];
    }
    return numeroMayor;
}

function encuentraMenor (arreglo){
    let numeroMenor = Number.MAX_VALUE;
    for (let i=0; i<arreglo.length;i++){
        if (arreglo[i]<numeroMenor)
            numeroMenor=arreglo[i];
    }
    return numeroMenor;
}

let btnCalculaMayor = document.getElementById("btnCalculaMayor");
btnCalculaMayor.addEventListener("click", function (event){
    event.preventDefault();  //le quita el funcionamiento que tenía el boton por default
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let n3 = parseInt(document.getElementById("num3").value);
    let arreglo1 = [n1,n2,n3];
    let resultado = document.getElementById("alerta");
    
    resultado.innerHTML += "El numero mayor es: " + encuentraMayor(arreglo1);
});

let btnCalculaMenor = document.getElementById("btnCalculaMenor");
btnCalculaMenor.addEventListener("click", function (event){
    event.preventDefault();  //le quita el funcionamiento que tenía el boton por default
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let n3 = parseInt(document.getElementById("num3").value);
    let arreglo1 = [n1,n2,n3];
    let resultado = document.getElementById("alerta");
    
    resultado.innerHTML += "<br> El numero menor es: " + encuentraMenor(arreglo1);
});

///////////// Funcion para el ejercicio 3 //////////////////
let vidas = 10;
let btnAdivina = document.getElementById("btnAdivina");
let adivinanza = document.getElementById("adivinanza");
let resultado = document.getElementById("alerta4");
let numeroMaquina = Math.floor((Math.random()*100)+1);

btnAdivina.addEventListener("click", adivinar);

function adivinar(numUsuario){
    numUsuario=parseInt(adivinanza.value);
    if(vidas==0){
        alert ("se acabaron tus vidas, refresca para reiniciar");
    }else if(numUsuario==numeroMaquina){
        alert ("Adivinaste, refresca para reiniciar");
    }else if(numUsuario>numeroMaquina){
        vidas--;
        resultado.innerHTML+= "<br>El numero es menor";
    }else if(numUsuario<numeroMaquina){
        vidas--;
        resultado.innerHTML+= "<br>El numero es mayor";
    }
}

///////////// Funcion para el ejercicio 4 //////////////////
function multiplo3(numero) {
    if (numero%3 ==0){
        return "<br> Si es multiplo de 3"
    }else {
        return "<br> No es multiplo de 3"
    }
}

let btnMultiplo = document.getElementById("btnMultiplo");
btnMultiplo.addEventListener("click", function (event){
    event.preventDefault();  //le quita el funcionamiento que tenía el boton por default
    let n1 = parseInt(document.getElementById("multiplo").value);
    let resultado = document.getElementById("alerta2");
    if (n1>=100 && n1<=200){
        resultado.innerHTML += multiplo3(n1);
    }else{
        resultado.innerHTML += "<br/> no está en el rango";
    }
    document.getElementById("multiplo").focus();
    document.getElementById("multiplo").select();
});

///////////// Funciones para el ejercicio 5 //////////////////
function revisaSuma (a2){
    if ((a2[0]==a2[1]+a2[2])||(a2[1]==a2[0]+a2[2])||(a2[2]==a2[0]+a2[1])){
        return true;
    }else{
        return false;
    }
}

let btnCalculaSuma = document.getElementById("btnCalculaSuma");
btnCalculaSuma.addEventListener("click", function (event){
    event.preventDefault();  //le quita el funcionamiento que tenía el boton por default
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let n3 = parseInt(document.getElementById("num3").value);
    let a2 = [n1,n2,n3];
    let resultado = document.getElementById("alerta");
    let mensaje = revisaSuma(a2);

    switch (mensaje) {
        case true:
            resultado.innerHTML += "<br>Uno de los numeros es la suma de los otros 2";
            break;
        case false:
            resultado.innerHTML += "<br>ningún numero es la suma de los otros 2";
            break;
        default:
            break;
    }
});

///////////// Funcion para el ejercicio 6 //////////////////
function paridad(numero) {
    if (numero %2 == 0){
        return "<br>Es par";
    }else{
        return "<br>Es impar";
    }
    }

let btnParidad = document.getElementById("btnParidad");
btnParidad.addEventListener("click", function (event){
    event.preventDefault();  //le quita el funcionamiento que tenía el boton por default
    let n1 = parseInt(document.getElementById("parImpar").value);
    let resultado = document.getElementById("alerta3");
    resultado.innerHTML+= paridad(n1);

    document.getElementById("parImpar").focus();
    document.getElementById("parImpar").select();
});