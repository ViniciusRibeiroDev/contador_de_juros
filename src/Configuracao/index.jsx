import { IoClose } from "react-icons/io5";
import parcelas from "../Juros/juros";
// import { SiUlule, SiUlule } from "react-icons/si";

const Configuracao = ({ setConfiguracao }) => {
    return <section className="configuracao" onClick={() => setConfiguracao(false)}>
        <div className="modal">
            <div className="cabecalho_de_saida">
                <IoClose className="x" onClick={() => setConfiguracao(false)} />
            </div>
            <div>
                <ul className="parcelas">
                    {Object.values(parcelas).map((elt, ind) => (
                        <li key={ind} className="parcela">
                           {ind + 1}x = {elt}% de Juros
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </section>
}

export default Configuracao