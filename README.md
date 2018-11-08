# Generador de Sprite SVG
Tarea que genera un Sprite SVG basado en symbols a partir de un directorio con varios SVG.

La recomendación de Sara Soueidan es que uses SVG en lugar de las fuentes (https://www.sarasoueidan.com/blog/icon-fonts-to-svg/),
su recomendación es que uses SVG en lugar de las fuentes (https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/).
Comparativa de las dos técnicas (https://css-tricks.com/icon-fonts-vs-svg/).

## Requisitos
Tener NodeJS y NPM instalados y Gulp de manera global.

## Instalación
Clonar o descargar repositorio.
Instalar las dependencias
```bash
$ npm install
```
o
```bash
$ yarn
```

## Ejecutar

Para ejecutar la tarea puedes usar cualquiera de los comando siguientes

```bash
$ npm start
```
o
```bash
$ yarn start
```
o
```bash
$ gulp
```

## Configuración

En el archivo `./config.js` están definidas las opciones de configuración.
Clave | Descripción | Valor por defecto
--- | --- | ---
**src**  | Directorio donde se encuentran los SVG  | `./src/svg`
**dest** | Directorio donde se generara el sprite | `./build/svg`
**filename** | Nombre del archivo SVG resultante | `sprite`


# Implementación

Incluir el contenido del SVG generado en la cabecera del documento HTML donde se quiera usar, para hacer referencia a un elemento hay que añadir en la pagina

```HTML
<svg class="class__icon--alert">
  <use xlink:href="#alert"></use>
<svg>
```
La referencia al identificador corresponde con el nombre de la imagen que se quiera mostrar.

Tambien se pude hacer llamando a un archivo externo pero tiene limitaciones con algunos navegadores.

```HTML
<svg class="class__icon--alert">
  <use xlink:href="path/to/icons.svg#alert"></use>
<svg>
```

**Puramente decorativo**
```HTML
<svg class="class__icon--alert" aria-hidden="true" focusable="false">
  <use xlink:href="path/to/icons.svg#alert"></use>
</svg>
```
