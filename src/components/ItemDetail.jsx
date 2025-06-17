function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <img src={product.imagen} alt={product.nombre} className="item-img" />
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
