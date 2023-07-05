function gerarTabuada(){
    let numeroText = document.querySelector('#txtn')
    let campoTxt = document.querySelector('#txtArea')
    if(numeroText.value == 0){
        window.alert('Digite um número')
    }else{
        let n1 = Number(numeroText.value)
        campoTxt.innerHTML = ""
        for (let c = 0; c < 11 ; c++ ) {
            let iten = document.createElement('option')
            iten.text = `${n1} x ${c} = ${n1*c}`
            campoTxt.appendChild(iten)
        }
    }
}