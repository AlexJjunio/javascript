let contador = 0
let res = document.querySelector('section#ires')

function adicionar() {
    contador ++
    res.innerHTML = (`<p>Valor do contador ${contador}</p>`)
}

function remover() {
    contador --
    res.innerHTML = (`<p>Valor do contador ${contador}</p>`)
}

function limpar() {
    contador = null
    res.innerHTML = (`<p>Valor do contador 0</p>`)
}