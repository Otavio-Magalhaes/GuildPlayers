import Colaborador from '../Colaborador'
import './Classe.css'

const Classe = (props) =>{
    
    const corPrimaria = props.corPrimaria
    const corSecundaria = props.corSecundaria
    
    return(
        
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: corSecundaria }}>
            <h3 style={{borderColor: corPrimaria}}> {props.nome} </h3>
            <div className='players'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nick} corDeFundo={corPrimaria} nick={colaborador.nick} cargo={colaborador.cargo} imagem = {colaborador.imagem} board ={colaborador.board}/>)}
            </div>
        </section>
    )
}


export default Classe