let num = document.querySelector(input#inum)
let lista = document.querySelector(select#ilista)
let res = document.querySelector(div.res)
let valores = []

function isNumero(n.value) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function isLista (n, l) {
    if(l.indexOf(Number(n) != -1))
    return true
}   else {
    return false
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}