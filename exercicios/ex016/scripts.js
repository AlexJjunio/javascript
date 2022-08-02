function calcular() {
    let agora = new Date()
    let anoAtual = agora.getFullYear()

    let  anoNasc = Number(prompt('Digite o ano em que você nasceu: '))
    idade = anoAtual - anoNasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em ${anoNasc} vai completar ${idade} anos em ${anoAtual}.</p>`
}