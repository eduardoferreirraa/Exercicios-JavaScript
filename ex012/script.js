function carregar(){
var msg = document.querySelector('div#msg')
var data = new Date()
var hora = data.getHours()
var res = document.querySelector('div#res')
var hora = 15
msg.innerHTML = `Agora são ${hora} horas`

 if (hora >= 0 && hora <12 ){
   res.innerHTML = 'Bom Dia! '
    img.src = "fotomanha.png"
    document.body.style.background = '#e2cd9f'
 } 
 
 else if (hora >= 12 && hora < 18) {
   res.innerHTML = 'Boa tarde!'
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
 } 
 
 else{
    res.innerHTML = 'Boa noite!'
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
 }
}