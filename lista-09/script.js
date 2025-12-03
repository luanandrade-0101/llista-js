function avaliar(){

    var nota = parseFloat(document.getElementById("nota").value)
    var result = document.getElementById("result")

    if (nota < 6) {
        result.textContent = "REPROVADO"
    }else{
        result.textContent = "APROVADO"
    }
}