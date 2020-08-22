import React from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function App() {
  return (
    /* Nombre y slogan de la página */
    <div className="App">
      <header className="App-header" >
        <p>Evernote wannabe</p>
      </header>
      <div className="App-slogan">
        <p>Olvídate del papel y recuerda todo</p>
      </div>
      <div className="App-rectanguloEtiquetas">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>#</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Etiqutas" />
        </InputGroup>
      <br />
      </div>
    </div>

    /* Rectángulo dónde se miran las etiquetas guardadas 
    <div className="App">
        <div className="App-rectanguloEtiquetas">
          <p>Esto es una prueba</p>
        </div>
    </div>*/

  );
}

export default App;
