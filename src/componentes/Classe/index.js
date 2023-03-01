import Colaborador from '../Colaborador'
import './Classe.css'

const Classe = ({classe,colaboradores, aoDeletar}) =>{
    
    
    return(
        (colaboradores.length > 0) && <section className='time' style={{backgroundColor: classe.corSecundaria }}>
            <h3 style={{borderColor: classe.corPrimaria}}> {classe.nome} </h3>
            <div className='players'>
            {colaboradores.map(colaborador => {
                return <Colaborador key={colaborador.nick} corDeFundo={classe.corPrimaria} nick={colaborador.nick} cargo={colaborador.cargo} imagem = {colaborador.imagem} board ={colaborador.board} aoDeletar={aoDeletar} />
            })}
            </div>
        </section>
    )   
}


export default Classe