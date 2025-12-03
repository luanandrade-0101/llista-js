function run(){

    var nome = document.getElementById("name").value
    var age = parseFloat(document.getElementById("age").value)
    var result = document.getElementById("result")

    var view = `Seu nome é ${nome} e você tem ${age} anos`

    result.textContent = view
}