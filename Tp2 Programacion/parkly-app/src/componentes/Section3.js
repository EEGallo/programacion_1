import React from 'react';
import '../stylesheet/Section3.css';

function Section(props) {
  return (
    <div className='contenedor-Section3'>
      
      <div className='contenedor-imagen-Section3'>
        <img className='imagen-Section3' src={require(`../img/${props.imagen}.png`)}/>
      </div>

      <div className='box-text-Section3'>
        <h1 className='tittle-Section2'>{props.title}</h1>
        <p className='text-Section2'>{props.text}</p>
      </div>
      
    </div>
  );
}

export default Section;