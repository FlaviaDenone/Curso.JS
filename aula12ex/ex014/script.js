function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src ='manha.png'
        document.body.style.background = '#edcbb0'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src ='tarde.png'
        document.body.style.background = '#a7b2b4'
    }else {
         //Boa noite
         img.src ='noite.png'
         document.body.style.background = '#00234d'
    }
       
}

