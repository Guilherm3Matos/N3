function conv(){
    var temp = parseFloat(document.getElementById('temp').value)

    let fahrenheit = 0 

    fahrenheit = ((temp * 1.8) + 32)

    alert(`A temperatura em Fahrenheit está: ${fahrenheit.toFixed(1)}`)

}