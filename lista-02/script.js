function calcular(){
    var base = parseFloat(document.getElementById("base").value)
    var altu = parseFloat(document.getElementById("altura").value)
    var template = document.getElementById("template")
    var result = (base * altu) / 2

    template.innerHTML = result
}