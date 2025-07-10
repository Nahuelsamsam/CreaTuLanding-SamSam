import './ItemDetail.css';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

function ItemDetail({ product }) {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();

  const incrementar = () => setCantidad(prev => prev + 1);
  const decrementar = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="item-detail">
      <img src={product.imagen} alt={product.nombre} className="item-img" />
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>

      <div className="contador-carrito">
        <div className="contador">
          <button onClick={decrementar}>-</button>
          <span>{cantidad}</span>
          <button onClick={incrementar}>+</button>
        </div>
        <button onClick={() => addToCart(product, cantidad)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
