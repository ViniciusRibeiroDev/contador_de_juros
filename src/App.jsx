import calculadorDeJuros from './Juros/calculadorDeJuros'
import RenderizadorDeJuros from './Renderizador'
import Configuracao from './Configuracao';
import { GrConfigure } from "react-icons/gr";
import { useState } from 'react'
import './App.css'

function App() {
  const [venda, setVenda] = useState(0)
  const [totalComJuros, setTotalComJuros] = useState()
  const [configuracao, setConfiguracao] = useState(false)

  const setVendaFuncao = (valor) => {
    setVenda(+valor)
  }

  const calcular = () => {
    setTotalComJuros(calculadorDeJuros(venda))
  }

  return (
    <>
      <GrConfigure onClick={() => setConfiguracao(true)}/>
      <h1>Calculadora de Parcelas</h1>
      <form>
        <input type="text" id="venda" onChange={(e) => setVendaFuncao(e.target.value)} placeholder='Valor da Venda' />
        <button type="button" onClick={() => { calcular() }}>Calcular</button>
      </form>
      {totalComJuros != undefined ? <RenderizadorDeJuros totalComJuros={totalComJuros} venda={venda} /> : <></>}
      {configuracao ? <Configuracao setConfiguracao={setConfiguracao}/>: <></>}
    </>
  )
}

export default App
