//Retorna a soma do dobro de todos os pares
//-> Filtrar pares
//->Dobrar Os Valores
//->Reduzir (somar Tudo)
const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27]

const pares=numeros.filter(valor => valor%2===0)//Filtrar Pares
.map(valor=>valor*2)//Dobrar
.reduce((ac,valor)=>ac+valor)//reduzir(Soma Tudo)
console.log(pares)