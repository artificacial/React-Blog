# Blog App with Vite.js, React, and Tailwind CSS

Este proyecto es una aplicación de blog construida con Vite.js, React y Tailwind CSS. La aplicación permite visualizar una lista de posts, filtrarlos por etiquetas, y ver el contenido completo de cada post en una página dedicada. Los posts están escritos en formato Markdown y se cargan dinámicamente desde archivos locales.

![ScreenCapture](https://github.com/artificacial/React-Blog/blob/master/public/screencapture/screencapture-localhost-5173-2024-07-24-10_36_56.png)

## Características

- **Lista de Posts**: Muestra una lista de posts en un formato de cuadrícula.
- **Filtrado por Etiquetas**: Filtra los posts basados en etiquetas seleccionadas.
- **Vista de Detalle del Post**: Muestra el contenido completo del post en una página dedicada.
- **Soporte para Markdown**: Los posts están escritos en archivos Markdown y se renderizan como HTML.
- **Estilos con Tailwind CSS**: Utiliza Tailwind CSS para un diseño moderno y receptivo.

## Tecnologías Utilizadas

- **Vite.js**: Herramienta de construcción rápida y moderna para aplicaciones de frontend.
- **React**: Biblioteca para construir interfaces de usuario.
- **Tailwind CSS**: Framework de utilidades CSS para diseñar de manera rápida y flexible.
- **vite-plugin-md**: Plugin para importar y procesar archivos Markdown en Vite.js.
- **react-markdown**: Librería para renderizar Markdown como componentes React.
- **gray-matter**: Para analizar el contenido de front matter en archivos Markdown.

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```

2. **Navega al Directorio del Proyecto**

   ```bash
   cd tu_repositorio
   ```

3. **Instala las Dependencias**

   ```bash
   npm install
   ```

4. **Inicia el Servidor de Desarrollo**

   ```bash
   npm run dev
   ```

5. **Abre tu Navegador**

   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

## Estructura del Proyecto

- `/src`: Contiene todos los archivos de código fuente de la aplicación.
  - `/components`: Componentes React reutilizables.
    - `/posts`: Componentes específicos para mostrar posts y etiquetas.
  - `/pages`: Páginas de la aplicación, incluyendo la vista de detalle del post.
  - `/utils`: Utilidades para cargar posts y manejar Markdown.
- `/content/posts`: Carpeta que contiene los archivos Markdown para los posts.
- `vite.config.js`: Configuración de Vite para la aplicación.
- `tailwind.config.js`: Configuración de Tailwind CSS.
- `package.json`: Archivo de configuración de dependencias y scripts.

## Creación de Nuevos Posts

1. **Agrega un Archivo Markdown en `/content/posts`**

   Crea un archivo Markdown en la carpeta `/content/posts` con el siguiente formato:

   ```markdown
   ---
   title: "Título del Post"
   pubDate: "Fecha de Publicación"
   author: "Autor"
   tags:
     - Etiqueta1
     - Etiqueta2
   ---

   Contenido completo del post en formato Markdown.
   ```

2. **Actualiza el Componente `PostDetail`**

   El componente `PostDetail` renderiza el contenido del post basado en el archivo Markdown correspondiente.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commits (`git commit -am 'Añadir nueva característica'`).
4. Envía tu rama al repositorio remoto (`git push origin feature/nueva-caracteristica`).
5. Crea una solicitud de extracción (pull request).

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

## Contacto

Para cualquier pregunta o comentario, por favor contacta a [tu_email@example.com](mailto:tu_email@example.com).

### Notas:

1. **URLs y Correos Electrónicos**: Asegúrate de reemplazar `https://github.com/tu_usuario/tu_repositorio.git` y `[tu_email@example.com](mailto:tu_email@example.com)` con tus propios detalles.
2. **Instrucciones de Instalación**: Asegúrate de que las instrucciones de instalación y los comandos sean correctos según tu configuración y entorno.
