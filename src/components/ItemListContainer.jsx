import React from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import productos from '../data/productos';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const productosFiltrados = categoryId
    ? productos.filter(prod => prod.categoria === categoryId)
    : productos;

  return (
    <div className="item-list">
      {productosFiltrados.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
