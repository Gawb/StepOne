// const lista1 = [
//     1,
//     2,
//     3,
//     3,
//     3,
//     4,
//     5,
//     1,
//     1,
//     8,
//     2,
//     1,
//     4
// ];

let testo = [2,3,4,5,6,7,8,2,3,2,2];
let list = [];

function agregarNumero(){
    const inputNumber = document.getElementById("InputNumero");
    list.push(inputNumber.value);
    let vacio = inputNumber.value = ""
    inputNumber.innerHTML = vacio;
}

function muestraLista(){
    console.log(list);
    const Lista = document.getElementById("Lista");
    Lista.innerText = "La lista actual cuento con los siguientes elementos: " + list;
}
function obtieneList(){

    const moda = calcularModa(list);
    const res = document.getElementById("Res");

    res.innerText = "La moda es: " + moda[0] + " aparece " + moda[1] + " veces en la lista.";
}

function calcularModa(lista){

    const lista1Count ={};

    lista.map(
        function (elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
            
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado,nuevovalor){
        return valorAcumulado[1] - nuevovalor[1]; 
        }
    );

    return moda = lista1Array[lista1Array.length -1];

}