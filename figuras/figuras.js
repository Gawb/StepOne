//código del cuadrado
console.group("Cuadratura")

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
return lado * lado;
} 

console.groupEnd();

//Código del triagulo
console.group("Triangulo")

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base
}

function areaTriangulo(base,altura){
 return (base * altura) / 2
}

console.groupEnd();

//codigo circulo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 
console.groupEnd();

////////////interacción con HTML///////////////

//botones del cuadrado:
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularareaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//botones del triangulo:
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputLado3");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputBase");
    const input2 = document.getElementById("InputAltura");

    const value1 = input1.value;
    const value2 = input2.value;

    const area = areaTriangulo(value1,value2);
    alert(area);
}

