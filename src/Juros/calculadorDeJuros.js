import parcelas from './juros'

const calculadorDeJuros = (valorDaVenda) => {
    const valorComJuros = []

    for (let i = 0; i < 12; i++) {
        valorComJuros[i] = Number(valorDaVenda + ((valorDaVenda * (parcelas[i] + 1.65)) / 100)).toFixed(2)
    }

    if (valorDaVenda >= 700) {
        valorComJuros[0] = valorDaVenda
        valorComJuros[1] = valorDaVenda
        valorComJuros[2] = valorDaVenda
        valorComJuros[3] = valorDaVenda
    } else if (valorDaVenda >= 500) {
        valorComJuros[0] = valorDaVenda
        valorComJuros[1] = valorDaVenda
        valorComJuros[2] = valorDaVenda
    } else if (valorDaVenda >= 200) {
        valorComJuros[0] = valorDaVenda
        valorComJuros[1] = valorDaVenda
    } else {
        valorComJuros[0] = valorDaVenda
    }

    return valorComJuros
}

export default calculadorDeJuros

// (1000 + (1000 * (14.62 + 1.65)) / 100)