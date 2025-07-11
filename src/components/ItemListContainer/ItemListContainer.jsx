import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import { getProducts } from '../../firebase/db';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosFirebase = await getProducts();
        console.log("Productos desde Firebase:", productosFirebase);
        setProductos(productosFirebase);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchData();
  }, []);

  const productosFiltrados = categoryId
    ? productos.filter((prod) => prod.categoria === categoryId)
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
