function verificar() {
  
  // capturando os componentes da página
  let rel = document.querySelector('input#rel')
  let res = document.querySelector('div#res')

  // chamando a função DATE 
  let agora = new Date()

  // pegando somente hora do horário atual
  let hora = agora.getHours()
  let minuto = agora.getMinutes();
  
  // convertendo para numero a entrada de dados
  let relogio = Number(rel.value)
  
  //console.log(relogio)
  //console.log(agora)
  //console.log(hora)

  // se for antes do meio-dia
  if (relogio <= 12) {

    res.innerHTML = `<p><strong>Bom dia!!</strong></p>`

  }
  // se for entre meio-dia e final da tarde
  else if (relogio > 12 && relogio <= 18) {

    res.innerHTML = `<p><strong>Boa tarde !!</strong></p>`

  }
  // se for outro horário, noite
  else{

    res.innerHTML = `<p><strong>Boa noite!!</strong></p>`

  }

  res.innerHTML += `<p>Mas, o horário atual é este : ${hora}h${minuto} !</p>`
}