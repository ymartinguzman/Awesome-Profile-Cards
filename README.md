# < em> y </ em>'s Awesome Profile Cards [Adalab](www.adalab.es)
## Proyecto grupal del módulo 2: Desarrollo de una aplicación web de creación de tarjetas de visita personalizadas. 


### Descripción

El proyecto consiste ealizar una aplicación web que nos permite crear una tarjeta de visita personalizada. En la página web podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información. 
Durante el desarrollo de esta aplicación web se han utilizado las siguientes tecnologías:

- Uso avanzado de formularios HTML.
- Maquetación usando CSS avanzado, como Flexbox y Grid.
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo usando la estrategia mobile first.
- Gestión de eventos en el navegador.
- Acceso y envío de datos a un servidor.
- Almacenamiento en local usando LocalStorage.
- Uso de git para el control de versiones del proyecto.
- Publicación del resultado en Internet usando GitHub Pages.

Para la realización de este proyecto se han seguido las siguientes fases:

- Desarrollo de la página de Landing.
- Desarrollo de una primera versión básica de la web, con la maquetación de la estructura básica (para desktop y móvil) que incluye el formulario con los colapsables y la vista previa de la tarjeta.
- Activación de la interacción del formulario: al modificar un campo del formulario, tanto del diseño de la tarjeta como de los datos de usuario se actualiza la vista previa.
- Creación de validaciones de datos del formulario.
- Creación de funcionalidad del botón de Reset: al clickar el LocalStorage debe limpiarse y el formulario debe volver a su estado inicial.
- Creación de la funcionalidad de compartir en Twitter, enviando primero los datos al servidor para obtener la URL para compartir.
- Creación de la funcionalidad de LocalStorage para que el contenido se almacene en el navegador.

La aplicación web cuenta con dos páginas: una landing, y la página de creación de tarjetas:

#### Landing


![FireShot Capture 062 - {Awesome Profile Cards} - martreyz github io](https://user-images.githubusercontent.com/69849664/101880645-8acf3a00-3b93-11eb-8178-df25db8711d1.png)


#### Página de creación de tarjetas


![FireShot Capture 050 - Awesome Profile Cards - beta adalab es](https://user-images.githubusercontent.com/69849664/101880668-94f13880-3b93-11eb-9c02-362658d4f660.png)
![FireShot Capture 056 - Awesome Profile Cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101880671-96226580-3b93-11eb-874a-8ba2e3e89111.png)
![FireShot Capture 059 - Awesome Profile Cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101880673-96226580-3b93-11eb-9792-c572a03e1fe6.png)


## Composición del código:

- HTML: Dividido en partials, haciendo referencia a las secciones del código como sigue:
	- Footer.html: contiene el código referente al footer.
	- Header.html: contiene el código referente al header.
	- Generator-main.html: Contiene el código referente a la previsualización de la tarjeta y el formulario de selección de paletas.
	- Form.html: Contiene el código referente al formulario de introducción de datos de usuario.
	- Share.html: Contiene el código referente a la tercera sección colapsable, de creación de tarjeta y botón de compartir en Twitter.
	- Main.html: Contiene el código referente a la sección principal de la página de landing.
	- Main-benefits.html: Contiene el código repetido de la sección principal de la página de landing.
	- Card-generator.html: Contiene los includes de los partials anteriormente citados referentes a la página de creación de tarjeta.
	- index.html: Contiene los includes de los partials anteriormente citados referentes a la página Landing.
	
- scss: Dividido en partials:
	- Core: Contiene los partials de la hoja de reset CSS y las variables utilizadas por tratarse de código repetido, además contiene los keyframes de las animaciones existentes y mixins para los breakpoints del sistema de responsive.
	- Layout: Contiene los partials referentes al footer y el header.
	- Pages: Contiene los estilos correspondientes a las páginas existentes: index (landing) y generator (página de creación de tarjeta).
	- Main.scss: Contiene los imports de los partials anteriormente citados.
	
- js: Dividido en partials:
	- 01-main.js : partial actualmente vacío preparado para funciones de la sección principal.
	- 02-add-img.js: Contiene el código de la funcionalidad de añadir imagen en el formulario y mostrarla en la previsualización.
	- 03-collapsable.js: Contiene el código referente a la funcionalidad para colapsar y desplegar los menús de la página de creación de tarjeta.
	- 04-card-dessign.js: Contiene el código referente a las funcionalidades de paso de información y estilos de las paletas a la previsualización de la tarjeta.
	- 05-localstorage.js: Contiene el código referente a la funcionalidad de almacenamiento de la información introducida en el navegador.
	- 06-reset-button.js: Contiene el código referente a la funcionalidad del botón de reset.

  
## Arranque del proyecto:

- npm install: Para instalar las dependencias
<img width="624" alt="install" src="https://user-images.githubusercontent.com/69849664/101142786-61a02e00-3616-11eb-877a-cff3666ceee5.PNG">

- npm start: Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
<img width="625" alt="start" src="https://user-images.githubusercontent.com/69849664/101142795-649b1e80-3616-11eb-9c46-ea5a31cef5a2.PNG">

- npm run docs: Para publicar el proyecto a producción
<img width="628" alt="docs" src="https://user-images.githubusercontent.com/69849664/101142807-66fd7880-3616-11eb-9b84-2c1ecd7a9672.PNG">

## Autoras

<ul>
<li>Edurne Vila </li>
<li>Estíbaliz Barato</li>
<li>Marta Rey</li>
<li>Milda Grabyte</li>
<li>Yamira Martín</li>
</ul>


Hecho con :purple_heart: por < em> y </ em>
