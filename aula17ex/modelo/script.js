// pegando os inputs e os button
const txtn = document.querySelector('#txtn');
const btnAdd = document.querySelector('#btn');
const lista = document.querySelector('#txtArea');
const btnFinalizar = document.querySelector('#btn1');
const res = document.querySelector('#resultado')
let valores = []

// Adicionando os eventos nos button
btnAdd.addEventListener('click', clickadd );
btnFinalizar.addEventListener('click' , finalizar );

// função de adicionar o numero na caixa de texto
function clickadd(){
    if(txtn.value <= 0 || txtn.value >= 101){
        window.alert('Digite um número que seja válido')
                
    }else{
        let n1 = Number(txtn.value)
        let iten = document.createElement('option')
        iten.text = `valor ${n1} adicionado`
        lista.appendChild(iten)
        valores.push(Number(n1))
        res.innerHTML = ""
    }

    txtn.value = ""
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length

        // lista.innerHTML = ""
        let maior = valores[0]
        let menor = valores[0]
        res.innerHTML = `<p> Ao todo, temos ${total} numeros cadastrados </p>`
    }
}