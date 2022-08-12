function tabuada() {
    let res = document.getElementById('res')
    let num = document.getElementById('inum')
    let n = Number(num.value)
    if (num.value.length == 0) {
        alert('[Erro] Digite um número.')
        res.innerHTML = ''
    } else {
        res.innerHTML = ''
        for (let c = 1; c <= 9; c++)
        res.innerHTML += `<br> ${c} x ${n} = ${c*n}`
    }
}