function calc(){
    var nome = document.getElementById('nome').value
    var preço = parseFloat(document.getElementById('preço').value)
    var desc = parseFloat(document.getElementById('desc').value)

    let barato = 0
    barato = ((desc / 100) * preço) 
    barato = (preço - barato)

    alert(`${nome} após o desconto, ficou por: ${barato}R$`)
}
