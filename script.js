function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e teste novamente')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsexo[0].checked) {
            gênero = 'Homem'

            if(idade <= 0 && idade < 10){
                //Criança
                img.setAttribute('src', '.menino.img.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'menino.img.jpg')

            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem.img.jpg')

            }else{
                //idoso
                img.setAttribute('src', 'senhor.img.jpg')
            }
        }else if (fsexo[1].checked){
            gênero = 'Mulher'

        if(idade <= 0 && idade< 10){
            //Criança
            img.setAttribute('src', 'menina.img.jpg')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'menina.img.jpg')

        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'Mulher.img.jpg')

        }else{
            //idoso
            img.setAttribute('src', 'senhora.img.jpg')
    }
}

        img.style.width = '280px'
        img.style.alignItems = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}

