## ElectrOnline

Web app tipo e-commerce desarrollada con **React + Vite**, ruteo con **React Router** y persistencia en **Firebase (Firestore)**. Permite navegar productos, filtrar por categorías, ver detalle, gestionar carrito y generar una orden de compra.

## Funcionalidades

- **Catálogo**: listado de productos desde Firestore.
- **Filtrado por categoría**: menú desplegable con categorías leídas desde Firestore.
- **Detalle de producto**: vista individual con descripción, precio, imagen y stock.
- **Carrito**:
  - agregar productos con contador
  - validación de stock disponible considerando unidades ya agregadas
  - eliminar ítems y vaciar carrito
  - cálculo de total
- **Checkout**: formulario de comprador y generación de orden en Firestore.
- **Ruta 404** para páginas inexistentes.

## Stack / dependencias

- **React** (`react`, `react-dom`)
- **Vite**
- **React Router DOM**
- **Firebase**
- **Bootstrap**

## Rutas

- **`/`**: listado de productos
- **`/category/:categoryId`**: listado filtrado por categoría
- **`/item/:itemId`**: detalle del producto
- **`/cart`**: carrito
- **`/checkout`**: checkout / generación de orden
- **`/*`**: 404 - Página no encontrada

## Modelo de datos en Firebase

La app trabaja con estas colecciones:

### `items`

Campos usados por la UI:

- **`name`**: string
- **`description`**: string
- **`price`**: number
- **`stock`**: number
- **`url`**: string (URL de imagen)
- **`category`**: string

### `categories`

Se lee el campo:

- **`name`**: string

### `orders`

Se crea una orden con esta forma:

- **`buyer`**: `{ name, phone, email }`
- **`items`**: `[{ id, name, price, quantity }]`
- **`total`**: number
- **`date`**: string

## Estructura del proyecto

```
📦 src/
│
├── 📁 assets/
│
├── 📁 components/
│   ├── 🛒 cart/
│   │   └── 📄 cartItem.jsx
│   │
│   ├── 💳 checkout/
│   │   └── 📄 checkout.jsx
│   │
│   ├── 🧱 Item/
│   │   ├── 🎨 Item.css
│   │   └── 📄 Item.jsx
│   │
│   ├── 🔢 ItemCount/
│   │   ├── 🎨 ItemCount.css
│   │   └── 📄 ItemCount.jsx
│   │
│   ├── 🔍 ItemDetail/
│   │   ├── 📄 ItemDetail.jsx
│   │   ├── 🎨 ItemDetailContainer.css
│   │   └── 📄 ItemDetailContainer.jsx
│   │
│   ├── 📃 ItemList/
│   │   ├── 🎨 ItemList.css
│   │   ├── 📄 ItemList.jsx
│   │   └── 📄 ItemListContainer.jsx
│   │
│   └── 🧭 NavBar/
│       ├── 🛍️ CartWidget.jsx
│       ├── 🎨 NavBar.css
│       └── 📄 NavBar.jsx
│
├── 🧠 context/
│   └── 📄 CartContext.jsx
│
├── 🔥 firebase/
│   ├── ⚙️ config.jsx
│   └── 🗄️ db.jsx
│
├── 🖼️ Fotos/
│   └── 🖼️ Logo.png
│
├── 🎨 App.css
├── 📄 App.jsx
├── 🎨 index.css
└── 📄 index.jsx
```

## Documentación de métodos
# 📄 Cart.jsx

## 📌 Descripción

El componente **`Cart`** representa la vista principal del carrito de compras.  
Se encarga de:

- Mostrar los productos agregados al carrito  
- Permitir eliminar productos individuales  
- Vaciar el carrito completo  
- Calcular y mostrar el precio total  
- Redirigir al checkout  
- Mostrar un mensaje cuando el carrito está vacío  


# 📄 Checkout.jsx

## 📌 Descripción

El componente **`Checkout`** representa la etapa final del proceso de compra.  
Se encarga de:

- Capturar los datos del comprador mediante un formulario  
- Validar campos obligatorios del usuario  
- Generar la orden de compra  
- Enviar la orden a Firebase   
- Mostrar confirmación de compra exitosa  
- Generar y mostrar el ID de la orden  
- Vaciar el carrito automáticamente luego de la compra  

# 📄 Item.jsx

## 📌 Descripción

El componente **`Item`** representa la tarjeta individual de un producto dentro del catálogo.  
Se encarga de:

- Mostrar la información básica del producto  
- Renderizar la imagen del producto  
- Mostrar nombre, precio y descripción  
- Representar visualmente cada producto en la lista  
- Permitir la navegación al detalle del producto  

# 📄 ItemCount.jsx

## 📌 Descripción

El componente **`ItemCount`** gestiona la selección de cantidad de un producto antes de agregarlo al carrito.  
Se encarga de:

- Validar los límites mínimos y máximos según el stock disponible  
- Incrementar y decrementar la cantidad de productos  
- Mostrar mensaje cuando no hay stock disponible  
- Permitir agregar productos al carrito con la cantidad seleccionada  
- Ejecutar la función `onAdd` con la cantidad seleccionada  
- Representar visualmente el control de stock  

# 📄 ItemDetail.jsx

## 📌 Descripción

El componente **`ItemDetail`** representa la vista de detalle de un producto seleccionado.  
Se encarga de:

- Mostrar la información completa del producto  
- Renderizar imagen, nombre, descripción, precio y stock  
- Detectar si el producto ya está en el carrito  
- Calcular el stock disponible real según el carrito  
- Evitar agregar más unidades que el stock permitido  
- Permitir agregar productos al carrito  
- Mostrar mensajes informativos al usuario  

# 📄 ItemDetailContainer.jsx

## 📌 Descripción

El componente **`ItemDetailContainer`** actúa como contenedor lógico del detalle del producto.  
Se encarga de:

- Conectarse con Firebase para obtener los datos del producto  
- Manejar el estado del producto seleccionado  
- Actualizar el componente cuando cambia el ID  
- Controlar el renderizado dinámico del detalle  
- Centralizar la lógica de obtención de datos  

# 📄 ItemList.jsx

## 📌 Descripción

El componente **`ItemList`** se encarga de renderizar el listado de productos del catálogo.  
Se encarga de:

- Recibir la colección de productos 
- Iterar dinámicamente sobre los productos  
- Renderizar un componente `Item` por cada producto   
- Centralizar la visualización del catálogo  

# 📄 ItemListContainer.jsx

## 📌 Descripción

El componente **`ItemListContainer`** actúa como contenedor lógico del catálogo de productos.  
Se encarga de:

- Conectarse con Firebase para obtener los productos  
- Filtrar productos por categoría  
- Manejar el estado local de la lista de productos  
- Actualizar el listado cuando cambia la categoría   

# 📄 CartWidget.jsx

## 📌 Descripción

El componente **`CartWidget`** representa el ícono interactivo del carrito de compras en la barra de navegación.  
Se encarga de:

- Calcular el total de unidades en el carrito  
- Mostrar el ícono del carrito de forma visual  
- Indicar la cantidad de productos agregados  
- Mostrar badge dinámico con contador de productos  
- Ocultar el contador cuando el carrito está vacío  
- Permitir la navegación hacia la vista del carrito  

# 📄 NavBar.jsx

## 📌 Descripción

El componente **`NavBar`** representa la barra de navegación principal de la aplicación.  
Se encarga de:

- Renderizar la estructura principal del encabezado  
- Mostrar el logo del proyecto  
- Permitir la navegación a la página principal  
- Mostrar las categorías en un menú desplegable  
- Generar navegación por categorías  
- Mostrar el ícono del carrito  

# 📄 CartContext.jsx

## 📌 Descripción

El archivo **`CartContext`** implementa el sistema de estado global del carrito de compras utilizando Context API de React.  
Se encarga de:
 
- Proveer el estado del carrito a toda la aplicación  
- Centralizar la lógica de negocio del carrito  
- Almacenar los productos seleccionados  
- Gestionar el agregado de productos  
- Controlar duplicados en el carrito  
- Incrementar cantidades de productos existentes  
- Eliminar productos individuales  
- Vaciar completamente el carrito  
- Verificar si un producto está en el carrito  
- Calcular el total de unidades  
- Calcular el precio total del carrito  



---


📚 Autor

Matías Antelo

Proyecto desarrollado para la entrega de React (Coderhouse).