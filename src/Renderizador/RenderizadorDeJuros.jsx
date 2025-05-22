const RenderizadorDeJuros = ({totalComJuros}) => {
    return <ul>
        {totalComJuros.map((elt, ind) => {
            return <li>{ind + 1}x {(elt / (ind + 1)).toFixed(2)} - {elt}</li>
        })}
    </ul>
}

export default RenderizadorDeJuros