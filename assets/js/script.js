

document.querySelector("#qtde").addEventListener("change", calcularOrcamneto)
document.querySelector("#js").addEventListener("change", calcularOrcamneto)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamneto)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamneto)
document.querySelector("#prazo").addEventListener("change", calcularOrcamneto)


function calcularOrcamneto() {
    let qtde = document.querySelector("#qtde").value
    let preco = qtde * 100

    let js = document.querySelector("#js").checked

    
        if (js) preco *= 1.1

        let layout = document.querySelector("#layout_sim").checked
        if(layout) preco += 500

        let prazo = document.querySelector("#prazo").value
        document.querySelector("#label_prazo").innerHTML = "Prazo(" + prazo + " semanas)"
    

    document.querySelector("#preco").innerHTML = "R$" + preco.toFixed(2)
}

//manioulação do DOM

//ECMAScript