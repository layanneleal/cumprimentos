function verificar() {
  
  let rel= document.querySelector('input#rel')
  let res= document.querySelector('div#res')  
  let agora= new date()
  let hora= agora.getHours()
  let relogio  = Number(rel.value)
 

  if (hora < 12) {
    res.innerHTML += `<p><strong>Bom dia!!</strong></p>`

  }else if (hora <= 18) {
    res.innerHTML += `<p><strong>Boa tarde !!</strong></p>`

  }else{
    res.innerHTML += `<p><strong>Boa noite!!</strong></p>`
  }
  res.innerHTML= `<p>São exatamente: ${hora}!</p>`
}