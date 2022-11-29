import React from 'react';
import '../estilos/Boton.css'

function Boton(props){

const esOperador = valor => {

    return isNaN(valor) && (valor != '.') && (valor != '=');     //mirar si la cadena de caracteres, si no es un numero y tampoco es un punto y sin tampoco es un signo igual

};   

return(

        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}   
            
            onClick={() => props.manejarClic(props.children)}>
            {props.children}

        </div>

    );
}

export default Boton;

 // quitar espacios al final con trimEnd()