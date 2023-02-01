import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  
    const boards = [
        '',
        'Yellow Fiver',
        'Yellow Fresh'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nick,
            cargo,
            imagem,
            classe,
            board
        })
        setNick('')
        setCargo('Habitante')
        setImagem('')
        setClasse('')
        setBoard('')

    }

    const [nick,setNick] = useState('')
    const [cargo,setCargo] = useState('Habitante')
    const [imagem,setImagem] = useState('')
    const [classe,setClasse] = useState('')
    const [board,setBoard] = useState('')






    return (
        <section className = 'formulario'>
            <form onSubmit = {aoSalvar}>
                <h2>Digite os dados para criação do card do player</h2>
                
                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Nick" 
                    placeholder = "Digite o nick" 
                    valor = {nick}
                    aoAlterado = {valor => setNick(valor)}
                />

                <CampoTexto 
                    label = "Cargo" 
                    placeholder = "Digite a Cargo"
                    valor = {cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />

                <CampoTexto 
                    obrigatorio = {true} 
                    label = "Imagem" 
                    placeholder = "Digite o link da imagem dos itens"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio = {true} 
                    label = "Classe" 
                    itens = {props.nomeDasclasses}
                    valor = {classe}
                    aoAlterado = { valor => setClasse(valor)}
                
                />


                <ListaSuspensa 
                    obrigatorio={true} 
                    label = "Board" 
                    itens = {boards}
                    valor = {board}
                    aoAlterado = {valor => setBoard(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
