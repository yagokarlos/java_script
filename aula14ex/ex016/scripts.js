function contar() {
const inicio = document.querySelector('#inicio')
const fim = document.querySelector('#fim')
const passo = document.querySelector('#passo')
const res = document.querySelector('#resultado')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
    window.alert('[ERRO] Digite um número válido')
}else{
    res.innerHTML = 'Contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(i < f){
        for (let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449} `
    }res.innerHTML += `\u{1F3C1}`
    }
}}