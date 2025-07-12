import parcelas from './juros'

const jurosTotais = (valorDaVenda) => {
    const valorComJuros = []

    for (let i = 0; i < 12; i++) {
        valorComJuros[i] = Number((valorDaVenda / (1 - (parcelas[i] / 100))).toFixed(2))
    }

    return valorComJuros
}

export default jurosTotais