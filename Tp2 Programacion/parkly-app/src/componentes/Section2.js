import React from 'react';
import '../stylesheet/Section2.css';

function Section(props) {
  return (
    <div className='contenedor-Section2'>
      
      <div className='contenedor-imagen-Section2'>
        <img className='imagen-Section2' src={require(`../img/${props.imagen}.png`)}/>
      </div>

      <div className='box-text-Section2'>
        <h1 className='tittle-Section2'>{props.title}</h1>
        <p className='text-Section2'>{props.text}</p>
      </div>
      
    </div>
  );
}

export default Section;