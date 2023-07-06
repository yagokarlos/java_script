// pegando os inputs e os button
const txtn = document.querySelector('#txtn');
const btnAdd = document.querySelector('#btn');
const txtArea = document.querySelector('#txtArea');
const btnFinalizar = document.querySelector('#btn1');

// Adicionando os eventos nos button
btnAdd.addEventListener('click', clickadd );
btnFinalizar.addEventListener('click' , btnFinalizar );

// função de adicionar o numero na caixa de texto
function clickadd(){
    if(txtn.value == 0 || txtn.value >= 101 ){
        window.alert('Digite um número que seja válido')
                
    }else{
        let n1 = Number(txtn.value)
        let iten = document.createElement('option')
        iten.text = `valor ${n1} adicionado`
        txtArea.appendChild(iten)
    }
}