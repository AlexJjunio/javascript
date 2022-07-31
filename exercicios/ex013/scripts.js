function analisar() {

    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))

    let res = document.querySelector('section#resul')
    if (n1 > n2) {
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior é ${n1}.</p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior é ${n2}.</p>`
    } else {
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, ambos são iguais.</p>`
    }
}