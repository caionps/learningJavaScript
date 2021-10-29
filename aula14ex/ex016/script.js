function contador() {
    var I = document.getElementById('nI')
    var F = document.getElementById('nF')
    var P = document.getElementById('nP')
    var res = document.getElementById('res')

    var inicio = Number(I.value)
    var fim = Number(F.value)
    var passo = Number(P.value)
    
    if (I.value.length == 0 || F.value.length == 0 || P.value.length == 0) {

        window.alert('[Erro] Faltam dados!')

    } else {

        if (inicio < fim) {

            for(inicio; inicio <= fim; inicio = inicio + passo) {
            res.innerHTML += `${inicio} &#128073`
            }

        } else {

            for(inicio; inicio >= fim; inicio = inicio - passo) {
            res.innerHTML += `${inicio} &#128073`
            }

        }
        res.innerHTML += `&#127937`
        
    }
}




