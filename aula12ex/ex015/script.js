function verificar(){
    const data = new Date()
    let ano = data.getFullYear()
    let formAno = document.querySelector('#itxtano')
    let numIdade = Number(formAno.value)
    let res = window.document.querySelector('#res')
    if (formAno.value.length == 0 || formAno.value > ano || formAno.value < 1900){
        window.alert('[ERRO] Digite um valor válido')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - numIdade
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Um Homem'
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', 'imagens/meninoC.jpg')
            }else if (idade < 21){
                // Joven
                img.setAttribute('src', 'imagens/jovemH.jpg')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/adultoH.jpg')
            }else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoH.jpg')
            } 
            

        }else {
            genero = 'Uma Mulher'
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', 'imagens/meninaC.jpg')
            }else if (idade < 21){
                // Joven
                img.setAttribute('src', 'imagens/jovemM.jpg')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/adultoM.jpg')
            }else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoM.jpg')
            } 
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
        res.appendChild(img)
    }
}