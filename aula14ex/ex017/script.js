function tabuada() {
    
    let tab = document.getElementById('seltab')
    var numero = document.getElementById('num')
    num = Number(numero.value)
    
    if (numero.value.length == 0 || num > 9) {
        window.alert('[ERRO] Digite um valor de 0 a 9 (positivo ou negativo)')
    } else {
        
        tab.innerHTML = ''
        
        for(c = 0; c <= 9 ; c++) {
            
            let item = document.createElement('option')
            var d = num * c
            item.text = `${num} x ${c} = ${d}`
            tab.appendChild(item)
            
        }
    }
}
