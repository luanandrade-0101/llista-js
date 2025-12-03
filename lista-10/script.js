function calcular(){

   let result = document.getElementById("result")

   let pe1 = parseInt(document.getElementById("pe1").value)
   let pe2 = parseInt(document.getElementById("pe2").value)

    if(pe1 > pe2){
        result.textContent = "A primeira pessoa é mais velha"
    }else if(pe2 > pe1){
        result.textContent = "A segunda pessoa é mais velha"
    }else{
        result.textContent = "As idades são igauis"
    }

}