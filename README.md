Requisitos

Implementación de componente ItemCount que permita seleccionar cantidad de unidades a agregar al carrito y realice las validaciones necesarias (valor mínimo, límite por stock, etc.)

Ocultar el componente ItemCount en ItemDetail luego de agregar un producto al carrito.

-------------------------------------
Navegación
Navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout, utilizando React Router y mediante enlaces en el componente NavBar.

-------------------------------------

Criterios de compras
Almacenamiento del estado de carrito de compras mediante Context.

Mostrar el contenido del carrito dentro del componente Cart (productos, cantidades, subtotales, totales, etc.)

Mostrar un icono/imágen del carrito en el componente CartWidget. Debe mostrar el total de unidades agregadas al context

---------------------
Firebase
Implementación de Firestore como base de datos.

Creación de una colección donde se almacene la información de todos los productos del e-commerce, y realizar las consultas desde React para mostrarlos en la app.

Generación de un documento en Firestore al confirmar una compra, registrando los detalles de la misma.

-------------------

Experiencia de usuario
Utilizar renderizado condicional para mostrar loaders y mensajes condicionales, como “producto sin stock”, “carrito vacío”, etc.

Como finalización de la experiencia de usuario, brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore