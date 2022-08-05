var ini = document.getElementById('iini')
var fim = document.getElementById('ifim')
let passo = document.getElementById('ipass')
let res = document.getElementById('res')
function contar() {
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i;c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //Contagem regresiva
            for (let c = i;c >= f;c -= p)
                res.innerHTML += `${c} \u{1f449}`
        }
    } 
    res.innerHTML += `\u{1f3c1}`
}