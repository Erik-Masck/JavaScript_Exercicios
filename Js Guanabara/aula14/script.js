function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //if e else if para Homem
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Jhomem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Ahomem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
        }

        //if e else if para mulher
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Jmulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Amulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}