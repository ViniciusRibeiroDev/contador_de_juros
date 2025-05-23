const RenderizadorDeJuros = ({ totalComJuros, venda }) => {
    return <ul>
        {totalComJuros.map((elt, ind) => {
            return <li key={ind}>{ind + 1}x {(Number(elt) / (ind + 1)).toLocaleString('pt-br',
                {
                    style: 'currency',
                    currency: 'BRL'
                })} - {Number(elt).toLocaleString('pt-br',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    })} - {elt == venda ? "Sem Juros" : "Com Juros"}</li>
        })}
    </ul>
}

export default RenderizadorDeJuros