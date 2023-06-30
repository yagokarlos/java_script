const diaAtual = new Date()
let diaSem = diaAtual.getDay()



switch(diaSem) {
    case 0:
        console.log('hoje é Domingo')
        break
    case 1:
        console.log('hoje é Segunda-feira')
        break
    case 2:
        console.log('hoje é Terça-feira')
        break
    case 3:
        console.log('hoje é Quarta-feira')
        break
    case 4:
        console.log('hoje é Quinta-feira')
        break
    case 5:
        console.log('hoje é Sexta-feira')
        break
    case 6:
        console.log('hoje é Sabádo')
        break
    default:
        console.log('Dia invalido')
}