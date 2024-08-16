function calc(){
    var alt = parseFloat(document.getElementById('alt').value)
    var base = parseFloat(document.getElementById('base').value)

    let area = 0
    area = (base * alt)

    alert(`A área do retângulo é: ${area}cm`)
}