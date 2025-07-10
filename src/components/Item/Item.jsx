import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="item">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/item/${id}`} className="ver-detalle-btn">Ver Detalle</Link>
    </div>
  );
};

export default Item;
