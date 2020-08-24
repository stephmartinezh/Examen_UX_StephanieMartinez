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
        <div className="App-rectanguloFecha">
            <p>Fecha</p>
        </div>
        <div className="App-rectanguloEtiqueta2">
            <p>Etiqueta</p>
        </div>
        <div className="App-rectanguloApunte">
            <p>Apunte</p>
        </div> 
        <div className="App-rectanguloTabla">
            <Table striped id="tabla"></Table>  
        </div>
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
//var condicionFuncion = true;
aEtiqueta.push(localStorage.getItem('Etiqueta'));
aFecha.push(localStorage.getItem('Fecha'));
aApunte.push(localStorage.getItem('Apunte'));

/*function cargarElementos(){
    if(localStorage.length >= 1){
        if(condicionFuncion){

            aEtiqueta.push(localStorage.getItem('Etiqueta'));
            aFecha.push(localStorage.getItem('Fecha'));
            aApunte.push(localStorage.getItem('Apunte'));
            storage();
            condicionFuncion = false;
        }else{
            registrarApunte();
        }
    }else{
        registrarApunte();
    }

}*/

function registrarApunte (){
    /*localStorage.removeItem('Fecha');
    localStorage.removeItem('Etiqueta');
    localStorage.removeItem('Apunte');*/
    var nEtiqueta = document.getElementById('tEtiqueta').value,
        nFecha = document.getElementById('tFecha').value,
        nApunte = document.getElementById('tApunte').value;
    if(nEtiqueta !== "" && nFecha !== "" && nApunte !== "" && aEtiqueta.length >= 1){
        var condicion = true;
        for(var i=0; i<=aEtiqueta.length; i++){
            if(aEtiqueta[i] === nEtiqueta){
                condicion = false;
                break;
            }
        }
        if(condicion){
            aEtiqueta.push(nEtiqueta);
            aFecha.push(nFecha);
            aApunte.push(nApunte);
            localStorage.setItem('Etiqueta', JSON.stringify(aEtiqueta));
            localStorage.setItem('Fecha', JSON.stringify(aFecha));
            localStorage.setItem('Apunte', JSON.stringify(aApunte));
            
            storage();
        }else{
            alert("Ingrese otro apunte con una nueva etiqueta");
        }
    }else if(aEtiqueta.length<=0){
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
    for(var i=1; i<aEtiqueta.length;i++){
        var elementos = "<td>"+aEtiqueta[i]+"</td><td>"+aFecha[i]+"</td><td>"+aApunte[i]+"</td>";
        document.getElementById('tabla').innerHTML=elementos;
    }
  }

export default App;