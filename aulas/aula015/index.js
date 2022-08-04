let num = [5,8,2,9,3]

num.push(1) //Adiciona um elemento no final das variaves, com o valor selecionado no parenteses

num.sort() //Organiza todos os numeros na variavel em ordem crescente

console.log(num)// Mostra todos os valores de minha variavel num

console.log(`O vetor tem ${num.length} posições`)//Mostra quantos elementos tem minha variavel

console.log(`O primeiro valor do vetor é ${num[0]}`) //Mostra o valor inserido no elemento 0

let pos = num.indexOf(10)
if (pos == -1 ) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
