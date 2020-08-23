import React from 'react';


var aEtiqueta = [],
    aFecha = [],
    aApunte = [];

var elementoBotonRegistrar = document.querySelector('btnGuardar');

elementoBotonRegistrar.addEventListener('click', registrarApunte);

function registrarApunte(){
    var objFecha = new Date();
    var dia  = objFecha.getDate();
    var mes  = objFecha.getMonth();
    var anio = objFecha.getFullYear();
    var fechaT =  dia+'/'+mes+'/'+anio;
    var nEtiqueta = document.querySelector('etiqueta').nodeValue,
        nApunte = document.querySelector('apunte').nodeValue;
    aEtiqueta.push(nEtiqueta);
    aFecha.push(nEtiqueta);
    aApunte.push(nApunte);
    localStorage.setItem('myCat', 'Tom');
    localStorage.setItem('etiqueta', JSON.stringify(aEtiqueta));
    localStorage.setItem('fecha', JSON.stringify(aFecha));
    localStorage.setItem('apunte', JSON.stringify(aApunte));
    <h1>POr lo menos el botón asqueroso sirve</h1>
}
