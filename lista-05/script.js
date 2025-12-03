function calcular(){

    var result = document.getElementById("result")
    var p1 = parseFloat(document.getElementById("person1").value)
    var p2 = parseFloat(document.getElementById("person2").value)
    var media = (p1 + p2) / 2

    result.textContent = media
}