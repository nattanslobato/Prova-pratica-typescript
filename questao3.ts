interface valores {
    x: number,
    y: number
}

const mult = (valor: valores) => {
    return console.log(valor.x * valor.y)
}

const num: valores = {x: 5, y: 27}

mult(num)