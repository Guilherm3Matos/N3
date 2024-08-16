function calc(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var n3 = parseFloat(document.getElementById('n3').value)
    var nome = document.getElementById('nome').value

    let media = 0

    media = ((n1 + n2 + n3)/3)

    alert(`A nota final do ${nome} é: ${media.toFixed(2)}`)

}