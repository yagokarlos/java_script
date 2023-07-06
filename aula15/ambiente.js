let num = [5 , 9 , 7 , 1 , 4]
// num[5] = 10
// console.log(num)
// console.log(`Nosso vetor é o ${num}`)

/*for (let pos = 0 ; pos < num.length ; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
} 



for (let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
*/


const pos = num.indexOf(7)

if(pos == -1){
    console.log('O valor não foi encontrado ')
}else{
    console.log(`o valor tem a posição ${pos}`)
}
