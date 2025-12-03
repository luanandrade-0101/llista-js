function calcular(){

var result = document.getElementById("result")
var selecione = document.getElementById("selecte").value
var idade = parseInt(document.getElementById("idade").value)

if(selecione === "mulher" && idade >= 40){
    result.textContent = "Recebeu desconto"
}else if(selecione == "homen"  && idade >= 50){
    result.textContent = "Recebeu desconto"
}else{
    result.textContent = "Sem desconto"
}

console.log(selecione)
console.log(idade)
}