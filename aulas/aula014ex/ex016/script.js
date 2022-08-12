function contar() {
    var ini = document.getElementById('iini')
    var fim = document.getElementById('ifim')
    var pas = document.getElementById('ipas')
    var res = document.querySelector('div.res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[Erro] Preencha todos os dados.')
    } else {
        res.innerHTML = ''
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            alert('[Erro] Considerando passo 1 para realizar a contagem.')
            p = 1
        } 
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            } 
        } else {
            for ( let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }

    }
}