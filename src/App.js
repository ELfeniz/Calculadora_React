
import './App.css';
import logo_halo from "./imagenes/Logo_halo.jpg";
import Boton from './Componentes/Boton'
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[input, setInput] = useState('');   // aignamos un estado Hooks

  const agregarInput = val => {

      setInput(input + val);   // el + funciona para concatenar datos
  };

  const calcularResultado = () =>{

      if(input){    // si la cadena de caracter esta vacia no hace nada
        setInput(evaluate(input));
      }


  };
  return (

    <div className="App">


        <div className="logo-cotenedor">

          <img 
            src= {logo_halo}
            className = 'logo_del_contenedor'
            alt = 'Logo del contenedor' />
        </div>

         <div className='contenedor-calculadora'>
            <Pantalla input={input}/>   
            <div className='fila'>
              <Boton manejarClic={agregarInput}>1</Boton>
              <Boton manejarClic={agregarInput}>2</Boton>
              <Boton manejarClic={agregarInput}>2</Boton>
              <Boton manejarClic={agregarInput}>+</Boton>
        
              </div>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>4</Boton>
              <Boton manejarClic={agregarInput}>5</Boton>
              <Boton manejarClic={agregarInput}>6</Boton>
              <Boton manejarClic={agregarInput}>-</Boton>              
            </div>
            <div className='fila'>
              <Boton manejarClic={agregarInput}>7</Boton>
              <Boton manejarClic={agregarInput}>8</Boton>
              <Boton manejarClic={agregarInput}>9</Boton>
              <Boton manejarClic={agregarInput}>*</Boton>  
            </div>
            <div className='fila'>
              <Boton manejarClic={calcularResultado}>=</Boton>
              <Boton manejarClic={agregarInput}>0</Boton>
              <Boton manejarClic={agregarInput}>.</Boton>
              <Boton manejarClic={agregarInput}>/</Boton>               
            </div>
            <div className='fila'>
              <BotonClear manejarClear={() =>setInput('')}>
                Clear
              </BotonClear>
            </div>

         </div>
        
    </div>
  );
}

export default App;
