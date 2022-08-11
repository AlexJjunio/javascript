function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homen-crianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'homen-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homen-adulto.jpg')
            } else {
                img.setAttribute('src', 'homen-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher-crianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}