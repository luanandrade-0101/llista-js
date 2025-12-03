function calcular(){
    
    const result = document.getElementById("result")
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var num3 = parseFloat(document.getElementById("num3").value)
    var soma = num1 + num2 + num3

    result.textContent = soma


}