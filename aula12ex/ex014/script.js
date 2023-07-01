
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    const data = new Date()
    const min = new Date()
    let minutos = min.getMinutes()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12 ){
        // bom dia
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.backgroundColor = '#4a4adee2'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.backgroundColor = '#dcdc3a'
    }else{
        //boa noite
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.backgroundColor = '#141313b1'
    }