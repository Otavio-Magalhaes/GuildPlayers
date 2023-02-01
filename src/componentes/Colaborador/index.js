import './Colaborador.css'

const Colaborador = ({nick, cargo, imagem, board, corDeFundo}) =>{
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h5>{nick}</h5>
                <h4>{cargo}</h4>
                <h4>{board}</h4>
            </div>
        </div>
    )

}

export default Colaborador