function interagir() {
    let agora = new Date()
    let saida = document.getElementById('sist')
    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}