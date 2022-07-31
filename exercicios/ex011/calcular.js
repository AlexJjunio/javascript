function calcular() {
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeiro nota de ${nome}`))
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}`))
    media = (n1 + n2) / 2

    let msg // Para criar uma váriavel e deixa-la vazia.
    if (media >= 6) { // se por acaso a média for 6 ou mais...
        msg = 'Meus Parabéns!'
    } else { // senão...
        msg = 'Estude um pouco mais!'
    }

    res = document.getElementById('resultado')
    res.innerHTML += (`<p>Calculando a média de ${nome}</p>`)
    res.innerHTML += (`<p>As notas obtidas foram ${n1} e ${n2}.</p>`)
    res.innerHTML += (`<p>A média final será ${media}</p>`)
    res.innerHTML += (`<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`)
}