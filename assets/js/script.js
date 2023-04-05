

document.querySelector("#qtde").addEventListener("change", calcularOrcamneto)
document.querySelector("#js").addEventListener("change", calcularOrcamneto)

function calcularOrcamneto() {
    let qtde = document.querySelector("#qtde").value
    let preco = qtde * 100

    let js = document.querySelector("#js").checked

    if (js == true) {
        preco = preco + (preco * 10/100)
    }

    document.querySelector("#preco").innerHTML = "R$" + preco
}

//manioulação do DOM

//ECMAScript