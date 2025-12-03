function calcular(){
    let num = parseInt(document.getElementById("num").value);
    let result = document.getElementById("result");

    if(isNaN(num)){
        result.textContent = "Digite um número válido!";
        return;
    }
    
    if(num % 5 === 0){
        result.textContent = `${num} é múltiplo de 5!`;
    } else {
        result.textContent = `${num} NÃO é múltiplo de 5`;
    }
}