function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#CEA1B3'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#B4B4A5'
    } else {
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#151E17'
    }
} 
