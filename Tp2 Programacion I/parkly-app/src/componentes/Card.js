import React from "react";
import '../stylesheet/Card.css';

const Card = (props) => {
    return (
        <div className="contenedor-card">
            <div className="card" style={{width: '18rem;'}}>
                <img src={require(`../img/${props.imagen}`)} className="card-img-top" alt="..." 
                style={{height: "235px", width: "auto"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="#" className="btn btn-primary">Descubre</a>
                </div>
            </div>
        </div>
        
    )
}

export default Card;