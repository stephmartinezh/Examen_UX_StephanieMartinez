import React from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Button, Label } from 'reactstrap';



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
            <InputGroupAddon addonType="prepend" id="tEtiqueta">
              <InputGroupText>#</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Etiquetas" />
        </InputGroup>
        <br />

      </div>

    <div className="App-rectanguloEscribir">
      <FormGroup>
        <Label for="tApunte">Escriba el apunte</Label>
          <Input type="textarea" name="text" id="tApunte" />
      </FormGroup>
    </div>

    <div className="App-fecha">
      <FormGroup>
        <Input
          type="date"
          name="date"
          id="fecha"
          placeholder="date placeholder"
        />
      </FormGroup>
      <div id="resultado"></div>
    </div>

    <div className="App-botonGuardar">
      <Button color="primary" id="btnGuardar" >Guardar</Button>
    </div>
  </div>
    
  );
}

/*function fecha(){
  var objFecha = new Date();
  var dia  = objFecha.getDate();
  var mes  = objFecha.getMonth();
  var anio = objFecha.getFullYear();
  //var fechaT =  dia+'/'+mes+'/'+anio;
  //fechaT = document.getElementById('resultado');
  return dia+'/'+mes+'/'+anio;
  
};*/


var aEtiqueta = [],
    aFecha = [],
    aApunte = [];

/*var elementoBotonRegistrar;
elementoBotonRegistrar = document.getElementById("btnGuardar");
elementoBotonRegistrar.addEventListener('click', registrarApunte());*/

function registrarApunte(){
  alert("Entro!");
  var objFecha = new Date();
  var dia  = objFecha.getDate();
  var mes  = objFecha.getMonth();
  var anio = objFecha.getFullYear();
  var fechaT =  dia+'/'+mes+'/'+anio;
  var nEtiqueta = document.querySelector('tEtiqueta').nodeValue,
      nApunte = document.querySelector('tApunte').nodeValue;
  aEtiqueta.push("Si");
  aFecha.push("Entra");
  aApunte.push("WOHO");
  localStorage.setItem('myCat', 'Tom');
  localStorage.setItem('etiqueta', JSON.stringify(aEtiqueta));
  localStorage.setItem('fecha', JSON.stringify(aFecha));
  localStorage.setItem('apunte', JSON.stringify(aApunte));
  //<h1>POr lo menos el botón asqueroso sirve</h1>
}


export default App;
