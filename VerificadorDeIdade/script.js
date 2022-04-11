function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById(`txtano`)
  var res = document.querySelector(`div#res`)
  if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert(`[ERRO] Verifique os dados e tente novamente!`)
  } else {
      var fsex = document.getElementsByName(`radsex`)
      var idade = ano - Number(fano.value)
      var gênero = ``
      var img = document.createElement(`img`)
      img.setAttribute(`id`, `foto`)
      if (fsex[0].checked) {
          gênero = 'Homem'
          if (idade >= 0 && idade <5) {
            //baby
            img.setAttribute('src', 'imagens/babyman.jpg')
        }else if (idade <10) {
            //Criança
            img.setAttribute('src', 'imagens/criançaMan.jpg')
        }else if (idade <21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovemMan.jpg')
        }else if (idade <50) {
            //Adulta
            img.setAttribute('src', 'imagens/homem.jpg')
        }else {
            //Idosa
            img.setAttribute('src', 'imagens/idoso.jpg')
        }
      } else if (fsex[1].checked) {
          gênero = 'Mulher'
          if (idade >= 0 && idade <5) {
            //baby
            img.setAttribute('src', 'imagens/bebewoman.jpg')
        }else if (idade <10) {
            //Criança
            img.setAttribute('src', 'imagens/criancaWoman.jpg')
        }else if (idade <21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovemWoman.jpg')
        }else if (idade <50) {
            //Adulta
            img.setAttribute('src', 'imagens/mulher.jpg')
        }else {
            //Idosa
            img.setAttribute('src', 'imagens/idosa.jpg')
        }
      }
      res.style
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
  }
}
