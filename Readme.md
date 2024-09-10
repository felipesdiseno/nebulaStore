# Nebula Store

Nebula Store es un E-commerce de tecnología que permite a los usuarios navegar por un catálogo de productos tecnológicos y realizar compras de manera sencilla y eficiente. El proyecto se enfoca en proporcionar una experiencia de usuario fluida y rápida, con funcionalidades clave que incluyen autenticación de usuarios y gestión del carrito de compras.

## Demo en vivo

Puedes visitar la página de Nebula Store en el siguiente enlace: [Nebula Store - Demo en Vivo](https://pm4fsdeploy-9eca.vercel.app/)

## Funcionalidades:

- Registro e inicio de sesión de usuarios.
- Visualización de catalogo de productos.
- Agregar productos y eliminar productos del carrito de compras.
- Visualización y edición del carrito antes de la confirmación de compra.
- Perfil de usuario que incluye:
  - Dirección de residencia.
  - Número de contacto.
  - Correo electrónico.

## Documentación

- **[Wireframes](extraCredits.md):** Diseño visual y estructura de la página.
- **[User Stories](userStories.md):** Historias de usuario que describen las funcionalidades del sistema desde el punto de vista del usuario.

## Tecnologias empleadas:

- **Next.js** para el frontend y gestión de rutas
- **Tailwind CSS** para el diseño y la personalización de la interfaz del usuario.

## Librerias utilizadas:

- SweetAlert2 para las notificaciones y alertas interactivas. [SweetAlert2](https://sweetalert2.github.io/)
- React icons para iconos interactivos. [React-icons](https://react-icons.github.io/react-icons/)
- FLowbite para el uso de componentes predefinidos de Tailwind. [Flowbite](https://flowbite.com/)

## Futuras mejoras:

- implementar un sistema de busqueda y filtrado de productos.
- Integrar pasarelas de pago.
- Agregar soporte Multilingüe para una experiencia más amplia de usuario.
- Agregar modo oscuro para una mejor visualización en entornos con poca luz.

## Instalación y ejecución

**Frontend**

1. Clona el repositorio:
   `git clone` https://github.com/usuario/nebula-store.git

2. Ir al directorio del frontend:
   `cd` PM4FE-DEPLOY/front
3. Instala las dependencias del Frontend:
   `npm install`

4. Ejecuta el Frontend localmente:
   `npm run dev`

**Backend**

1. Ir al directorio del backend:
   `cd` PM4FE-DEPLOY/back
2. Instala las dependencias del Backend:
   `npm install`

3. Ejecuta el backend:
   `npm start`

### **Nota:** Asegúrate de que el backend esté corriendo en el puerto correcto y que esté configurado para conectarse a cualquier base de datos que utilices. Consulta el archivo [.env.example](./back/.env.example) para ver las variables de entorno necesarias.
