import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "productos"));
  const productos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productos;
};

// 👇 Nueva función para guardar órdenes
export const saveOrder = async (order) => {
  const docRef = await addDoc(collection(db, "ordenes"), order);
  return docRef.id;
};
