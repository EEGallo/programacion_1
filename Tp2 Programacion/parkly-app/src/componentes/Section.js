import React from 'react';
import '../stylesheet/Section.css';

function Section(props) {
  return (
    <div className='contenedor-Section'>
      <div className='box-text-Section'>
        <h1 className='tittle-Section'>{props.title}</h1>
        <p className='text-Section'>{props.text}</p>
      </div>
      <img className='imagen-Section' src={require(`../img/${props.imagen}.png`)}/>
    </div>
  );
}

export default Section;
