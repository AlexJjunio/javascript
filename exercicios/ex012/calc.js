function analisar() {
    let num = Number(prompt('Digite um número: '))
    let msg
    if (num % 2 == 0) {
        msg = 'PAR'
    } else {
        msg = 'ÍMPAR'
    }

    res = document.getElementById('resul')
    res.innerHTML = (`<p>O número ${num} que foi digitado é <strong style='color:red;'>${msg}</strong>!</p>`)
}