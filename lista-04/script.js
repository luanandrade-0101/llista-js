function calcular(){

    var result = document.getElementById("result")
    var valorP = parseFloat(document.getElementById("valor").value)
    var desconto = valorP * 0.10
    result.textContent = valorP - desconto
}