# KyvyMates 🧉

**Autor:** Nahuel Sam Sam  
**Comisión:** 73710  
**Proyecto final – Curso React JS (Coderhouse)**

---

## 🛒 Descripción

**KyvyMates** es una tienda online de productos relacionados con la cultura del mate: mates, bombillas, termos y yerbas.  
El proyecto fue desarrollado con **React JS** y cumple con todos los requisitos del curso de Coderhouse.

Cuenta con funcionalidades como:

- Vista de productos por categoría
- Detalle individual de cada producto
- Carrito de compras con sidebar animado
- Control de stock y cantidades
- Checkout con formulario de contacto
- Estilo visual moderno y responsive

---

## 🧱 Tecnologías utilizadas

- React JS
- React Router DOM
- Context API
- Tailwind CSS (o estilos propios modernos)
- Firebase (si se utilizó para checkout / base de datos)

---

## 📸 Capturas del sitio

### 🏬 Home
![Home](/src/assets/home.png)

### 🛒 Sidebar del carrito
![Carrito](./assets/cart-sidebar.png)

### ✅ Checkout
![Checkout](./assets/checkout.png)

---

## 🧠 Estructura del proyecto

```bash
src/
├── components/
│   ├── Item.jsx
│   ├── ItemDetail.jsx
│   ├── ItemList.jsx
│   ├── CartSidebar.jsx
│   └── ...
├── context/
│   └── CartContext.jsx
├── data/
│   └── productos.js
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
└── App.jsx
