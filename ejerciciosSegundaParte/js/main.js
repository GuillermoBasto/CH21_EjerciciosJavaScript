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