

document.querySelector("#qtde").addEventListener("change", calcularOrcamneto)
document.querySelector("#js").addEventListener("change", calcularOrcamneto)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamneto)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamneto)
document.querySelector("#prazo").addEventListener("change", calcularOrcamneto)


function calcularOrcamneto() {
    
    let preco = qtde.value * 100
    if (js.checked) preco *= 1.1
    if(layout_sim.checked) preco += 500

    let taxadeUrgencia = preco * (1.1 - prazo.value * 0.1)
    preco += taxadeUrgencia

    label_prazo.innerHTML = `Prazo(${prazo.value} semanas)`
    
    output.innerHTML = `R$ ${preco.toFixed(2)}`
}

//manioulação do DOM

//ECMAScript