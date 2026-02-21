Entrega final: Web App de e-commerce
Podrás seleccionar una temática a elección, creando tu propio catálogo de productos, o utilizando herramientas generadoras de datos o "mock data".Implementa la conexión a un servicio en la nube (Firebase) que te provea de una Base de Datos donde almacenar el listado de tus productos, y te permita guardar registros de las compras realizadas por los usuarios del e-commerce.

Objetivos


Requisitos
Listado y Detalle de productos
Generación dinámica del listado de productos y acceso a la vista en detalle de cada uno (ItemListContainer y ItemDetailContainer)

Implementación de componente ItemCount que permita seleccionar cantidad de unidades a agregar al carrito y realice las validaciones necesarias (valor mínimo, límite por stock, etc.)

Ocultar el componente ItemCount en ItemDetail luego de agregar un producto al carrito.

Navegación
Navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout, utilizando React Router y mediante enlaces en el componente NavBar.

Criterios de compras
Almacenamiento del estado de carrito de compras mediante Context.

Mostrar el contenido del carrito dentro del componente Cart (productos, cantidades, subtotales, totales, etc.)

Mostrar un icono/imágen del carrito en el componente CartWidget. Debe mostrar el total de unidades agregadas al context

Creación de una colección donde se almacene la información de todos los productos del e-commerce, y realizar las consultas desde React para mostrarlos en la app.

Generación de un documento en Firestore al confirmar una compra, registrando los detalles de la misma.

Experiencia de usuario
Utilizar renderizado condicional para mostrar loaders y mensajes condicionales, como “producto sin stock”, “carrito vacío”, etc.

Como finalización de la experiencia de usuario, brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore

Buenas prácticas y convenciones
Respetar las convenciones y consignas del curso para los nombres de variables funciones, componentes. eventos, y arquitectura de carpetas/archivos.

Crear un documento en formato markdown documentando brevemente el proyecto

Recomendaciones

No es necesario que envíes el enlace a tu panel de Firestore: el mismo es visible solo para el usuario administrador (es decir, accediendo con tu cuenta de google)