//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
            function (valurAcumulado = 0, nuevoElemento){
                return valurAcumulado + nuevoElemento;
            }
        );    
        const promedioLista1 = sumaLista / lista.length;
        return promedioLista1;
        }

const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;

    }
);

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
         const personitaMitad2 = lista[mitad];

         const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
         return mediana;
    }else{
         const personitaMitad = lista[mitad];
         return personitaMitad
    }
}

const meidanaGeneralCol =  medianaSalarios(salariosColSorted);

//mediana top 10
const spliceStar = (salariosColSorted.length * 90)/ 100;
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice( 
    spliceStar,
    spliceCount,
);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    meidanaGeneralCol,
    medianaTop10Col

);