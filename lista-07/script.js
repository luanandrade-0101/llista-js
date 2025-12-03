function calcular(){

    let num = parseInt(document.getElementById("num").value)
    let result = document.getElementById("result")
    result.textContent = ""

    for(let i = 1; i <= 10; i++){
        let mult = num * i
        result.innerHTML += ${num} x ${i} = ${mult}<br>
    }
}