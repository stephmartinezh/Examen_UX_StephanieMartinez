import React from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Button } from 'reactstrap';

function App() {
  //var fechaLocal = fecha();
  return (
    <div className="App">
      <header className="App-header" >
        <p>Born to remember</p>
      </header>

      <div className="App-slogan">
        <p>Olvídate del papel y recuerda todo</p>
      </div>

      <div className="App-rectanguloMostrar">
        <p>Aquí irían los apuntes guardados</p>
      </div>

    <div className="App-rectanguloEtiqueta">
       <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>#</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Etiquetas" />
          </InputGroup>
        <br />
      </div>

    <div className="App-rectanguloEscribir">
      <FormGroup>
          <Input type="textarea" name="text" id="apunte" />
      </FormGroup>
    </div>

    <div className="App-fecha">
      <p>Fecha: </p>
      <div id="resultado"></div>
    </div>

    <div className="App-botonGuardar">
      <Button color="primary">Guardar</Button>{' '}
    </div>
  </div>
    
  );
}

/*function fecha(){
  var objFecha = new Date();
  var dia  = objFecha.getDate();
  var mes  = objFecha.getMonth();
  var anio = objFecha.getFullYear();
  var fechaT =  dia+'/'+mes+'/'+anio;
  fechaT = document.getElementById('resultado');
};*/


export default App;
