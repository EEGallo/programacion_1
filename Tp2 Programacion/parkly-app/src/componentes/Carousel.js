import React from 'react'
import '../stylesheet/Carousel.css'

function Carousel(props) {
  return (
    <div className='carousel'>
    <img className='isologotipo' src={require(`../img/${props.imagen}.png`)}/>
    </div>
  )
}

export default Carousel;