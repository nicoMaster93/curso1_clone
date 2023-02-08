import React from "react";
import Testimonio from './components/Testimonio';
import './App.css';

/* Componentes de clase */

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='container-principal'>
          <h1>Listado de personajes</h1>
          <Testimonio 
          nombre="Jake " 
          empresa="en Avatar" 
          cargo="Personaje de la Película" 
          imagen="jake.jpeg"
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laudantium odit, assumenda ex, perferendis natus reiciendis molestiae corporis unde iure deserunt incidunt soluta animi facilis, eligendi rerum repellendus placeat rem!" 
          />
          <Testimonio 
          nombre="Neytir " 
          empresa="en Avatar" 
          cargo="Personaje de la Película" 
          imagen="Neytir.webp"
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laudantium odit, assumenda ex, perferendis natus reiciendis molestiae corporis unde iure deserunt incidunt soluta animi facilis, eligendi rerum repellendus placeat rem!" 
          />
          <Testimonio 
          nombre="Ronal " 
          empresa="en Avatar" 
          cargo="Personaje de la Película" 
          imagen="ronal.webp"
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laudantium odit, assumenda ex, perferendis natus reiciendis molestiae corporis unde iure deserunt incidunt soluta animi facilis, eligendi rerum repellendus placeat rem!" 
          />
        </div>
      </div>
    );
  }
}

export default App;
