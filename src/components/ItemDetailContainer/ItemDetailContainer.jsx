import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../data/productos";


function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFound = productos.find((prod) => prod.id === parseInt(itemId));
    setProduct(productFound);
  }, [itemId]);

  if (!product) return <p>No se encontró el producto.</p>;

  return (
    <div className="item-container">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
