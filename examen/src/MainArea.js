import React from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Button, Label, Table } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <p>Born to remember</p>
      </header>

      <div className="App-slogan">
        <p>Olvídate del papel y recuerda todo</p>
      </div>

      <div className="App-rectanguloMostrar">
        <Table id="tabla">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Etiqueta</th>
            <th>Apunte</th>
          </tr>
        </thead>
        </Table>       
      </div>

    <div className="App-rectanguloEtiqueta">
       <InputGroup>
            <InputGroupAddon addonType="prepend" >
              <InputGroupText>#</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Etiquetas" id="tEtiqueta" />
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
          id="tFecha"
          placeholder="date placeholder"
        />
      </FormGroup>
      <div id="resultado"></div>
    </div>

    <div className="App-botonGuardar">
      <Button color="primary" id="btnGuardar" onClick={registrarApunte} >Guardar</Button>
    </div>
  </div>
    
  );
}



var aEtiqueta = [],
    aFecha = [],
    aApunte = [];

//var arregloGuardado = [];

function registrarApunte (){
    /*localStorage.removeItem('Fecha');
    localStorage.removeItem('Etiqueta');
    localStorage.removeItem('Apunte');*/
    var nEtiqueta = document.getElementById('tEtiqueta').value,
        nFecha = document.getElementById('tFecha').value,
        nApunte = document.getElementById('tApunte').value;
    if(nEtiqueta !== "" && nFecha !== "" && nApunte !== ""){
        aEtiqueta.push(nEtiqueta);
        aFecha.push(nFecha);
        aApunte.push(nApunte);
        localStorage.setItem('Etiqueta', JSON.stringify(aEtiqueta));
        localStorage.setItem('Fecha', JSON.stringify(aFecha));
        localStorage.setItem('Apunte', JSON.stringify(aApunte));
        storage();
    }else{
        alert("Por favor llene todos los campos del apunte antes de guardar");
    }
    
}

function storage(){
    var elementos = "<tr><td>"+aEtiqueta+"</td><td>"+aFecha+"</td><td>"+aApunte+"</td></tr>";
    document.getElementById('tabla').innerHTML=elementos;
  }

export default App;