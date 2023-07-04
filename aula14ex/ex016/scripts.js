function contar() {
const inicio = document.querySelector('#inicio')
const fim = document.querySelector('#fim')
const passo = document.querySelector('#passo')
let res = document.getElementById('resultado')

let n1 = Number(inicio.value)
let n2 = Number(fim.value)

let soma = n1 + n2 

res.innerHTML = `O seu passos vai começar a contar em ${n2}`
}