function calcular(){

    let celsius = parseFloat(document.getElementById("Celsius").value)
    let result = document.getElementById("result")
    var f = (celsius * 1.8) + 32

    result.innerHTML = f
}