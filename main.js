let nome = document.getElementById('input-name')
let altura = document.getElementById('input-altura')
let peso = document.getElementById('input-peso')

function calcularImc() {
    let calculoImc = (peso.value) / (altura.value * altura.value)
    let paragrafo = document.getElementById('p-resultado')


    if (calculoImc < 18.5) {
        paragrafo.innerHTML = `${nome.value}, seu IMC é ${calculoImc.toFixed(2)} e está abaixo do peso normal`
    }
    else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
        paragrafo.innerHTML = `${nome.value}, seu IMC é ${calculoImc.toFixed(2)} e está com o peso normal`
    }
    else if (calculoImc >= 25 && calculoImc < 29.9) {
        paragrafo.innerHTML = `${nome.value}, seu IMC é ${calculoImc.toFixed(2)} e está com excesso de peso`
    }
}
function limparDados(){
    nome.value = ""
    altura.value = ""
    peso.value =""
    document.getElementById('p-resultado').textContent=""
    }