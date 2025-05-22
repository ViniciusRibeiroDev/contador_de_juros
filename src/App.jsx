import RenderizadorDeJuros from './Renderizador/RenderizadorDeJuros'
import calculadorDeJuros from './Juros/calculadorDeJuros'
import { useState } from 'react'
import './App.css'

function App() {
  const [venda, setVenda] = useState()
  const [totalComJuros, setTotalComJuros] = useState()

  const setVendaFuncao = (valor) => {
    setVenda(valor)
  }

  const calcular = () => {
    setTotalComJuros(calculadorDeJuros(+venda))
    console.log(totalComJuros)
  }

  return (
    <>
    <h1>Calculadora de Parcelas</h1>
    <form>
      <input type="text" id="venda" onChange={(e) => setVendaFuncao(e.target.value)} placeholder='Valor da Venda'/>
      <button type="button" onClick={(e) => calcular()}>Calcular</button>
    </form>
      {totalComJuros != undefined ? <RenderizadorDeJuros totalComJuros={totalComJuros} /> : <div></div>}
    </>
  )
}

export default App
