function calc() {
    let saida = document.getElementById('saida')
    let meses = new Array('Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jul', 'Jun', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array('Dom', 'Seg', 'Ter','Qua', 'Qui', 'Sex', 'Sab')
    let agora = new Date()
    let dia = agora.getDate()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let dsem = agora.getDay()
    saida.innerHTML += `<p>Dia: ${dia}</p>`
    saida.innerHTML += `<p>Mês: ${meses[mes]}</p>`
    saida.innerHTML += `<p>Ano: ${ano}</p>`
    saida.innerHTML += `<p>Dia da semana: ${semana[dsem]}</p>`
    saida.innerHTML += `<p>Hora: ${hora}</p>`
    saida.innerHTML += `<p>Minutos: ${min}</p>`
    saida.innerHTML += `<p>Segundos: ${seg}</p>`
}