import { useState } from 'react';
import Banner from './componentes/Banner';
import Classe from './componentes/Classe';
import Formulario from './componentes/Formulario';

function App() {

  const classes = [
    {
      nome: 'Bruiser-Martelo',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Bruiser-espada',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Tank',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Healer AOE',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Healer PT',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Assasino',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Mago-Fire/Ice',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Debuffer',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Ranged-Arco',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Ranged-Mosquete',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
]  


  const [colaboradores, setColaboradores] = useState ( [] )

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores);
  }



  return (
    <div className="App">
      <Banner />
     <Formulario nomeDasclasses={classes.map(classe => classe.nome)} aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

    {classes.map(classe => 
      <Classe 
        key={classe.nome} 
        nome={classe.nome} 
        corPrimaria = {classe.corPrimaria}  
        corSecundaria = {classe.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.classe === classe.nome)}
      />)
    }
  
    </div>
  );
}

export default App;
