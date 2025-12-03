function calcular(){

   var result = document.getElementById("result")
   var qntd = parseFloat(document.getElementById("qntd").value)
   const metro = 100
   var cm = qntd * metro

   result.innerHTML = cm
}
    
   
    