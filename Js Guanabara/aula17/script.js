var num = document.querySelector('input#fnum')
var lista = document.queryselector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}