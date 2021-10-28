function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            gênero = 'Homem'
            
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhoemem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex [1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                img.setAttribute('src', 'idosamulher.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}