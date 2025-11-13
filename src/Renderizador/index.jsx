import jurosTotais from "../Juros/pedidosComJurosTotais"

const RenderizadorDeJuros = ({ totalComJuros, venda }) => {
    const comJuros = " Com Juros || Acréscimos de: "
    const real = (value) => value.toLocaleString('pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        })

    return <ul>
        {totalComJuros.map((elt, ind) => {
            return <li key={ind}>{ind + 1}x {real(parseFloat(elt) / (ind + 1))} - {real(parseFloat(elt))} - {elt == venda ? ("Sem Juros | " + real(jurosTotais(venda)[ind]) + comJuros + real(elt - venda)) : comJuros + real(elt - venda)}</li>
        })}
    </ul>
}

export default RenderizadorDeJuros