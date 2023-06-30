const horaAtual = new Date()
let hora = horaAtual.getHours()

console.log(`Agora são exatamente ${hora} horas`)
if(hora <= 12 && hora >= 6){
    console.log('Bom dia!')
}else if (hora >= 13 && hora <= 18){
    console.log('Boa tarde!')
}else if (hora > 18 && hora <= 24){
    console.log('Boa noite!')
}else if(hora <= 5){
    console.log('Boa madrugada!')
}
    