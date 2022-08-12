function gerar() {
    let num = document.getElementById('inum')
    let sel = document.getElementById('isel')
    let res = document.getElementById('res')
    if (num.value.length == 0) {
        alert('[Erro] Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        sel.innerHTML = ' '
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            sel.appendChild(item)
            c++
        }
    }
}