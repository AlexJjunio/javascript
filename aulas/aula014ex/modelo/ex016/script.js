function enviar () {
    var ini = document.getElementById('iini')
    var fim = document.getElementById('ifim')
    var pas = document.getElementById('ipas')
    var res = document.getElementById('res')
    
    if(ini.value == 0 || fim.value == 0 || pas.value ==0) {
        // alert(`[Erro] está faltando dados.`)
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (pas <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}` 

    }
}