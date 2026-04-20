function verificar(){
   var país = document.querySelector ('input#txt1').value
   var res = document.querySelector ('div#res')   
   res.innerHTML = `Você mora ${país}`

   if(país == 'Brasil'){
       res.innerHTML += '<p></p>Você é Brasileiro'
       img.src = 'brasilfoto.jpg'
       background = img.src = 'brasilfoto.jpg'
}
    else if (país == 'Chile') {
        img.src = 'chilefoto.jpg'
        res.innerHTML += '<p></p>Você é Chileno'
 } 
     
 else if (país == 'Estados Unidos'){
       img.src = 'euafoto.jpg' 
       res.innerHTML += '<p></p>Você é Americano'
    } 
    else if (país == 'Japão'){
        img.src = 'japao.jpg.jpg'
        res.innerHTML += '<p></p>Você é Japones'
    } 
    else if (país == 'Alemanha'){
        img.src = 'alemanha.jpg'
        res.innerHTML += '<p></p>Você é Alemão'
    } 
    else if(país == 'França'){
        img.src = 'frança.jpg'
        res.innerHTML += '<p></p>Você é Francês '
    }
    else if(país == 'Suiça'){
        img.src = 'suiça.jpg'
        res.innerHTML += '<p></p>Você é Suiço'
    }
    else if(país == 'Afeganistão'){
        img.src = 'afeganistão.jpg'
        res.innerHTML += '<p></p>Você é afegão'
    } 
    else if(país == 'Bahamas'){
        img.src = 'bahamas.jpg'
        res.innerHTML += '<p></p>Você é bahamense'
    }
    else if(país == 'Angola'){
        img.src = 'angola.jpg'
        res.innerHTML += '<p></p>Você é Angolano'
    }
    else if(país == 'Etiópia'){
        img.src = 'etiopia.jpg'
    }
}
