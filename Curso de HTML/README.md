# Curso de HTML

## Índice
1. [Documentación](#documentación)
1. [Introducción](#introducción)
1. [Software necesario](#software-necesario)
1. [Creando mi primer documento HTML](#creando-mi-primer-documento-html)
1. [Emmet.io y atajos de VS Code](#emmetio-y-atajos-de-vs-code)
1. [Introducción a HTML y su documentación](#introducción-a-html-y-su-documentación)
1. [Estructura básica de un documento HTML](#estructura-básica-de-un-documento-html)
1. [Comentarios en HTML](#comentarios-en-html)
1. [Etiqueta HTML y el atributo _lang_](#etiqueta-html-y-el-atributo-lang)
1. [Etiqueta _DOCTYPE_](#etiqueta-doctype)
1. [Atributo _charset_](#atributo-charset)
1. [Metaetiqueta _Viewport_](#metaetiqueta-viewport)
1. [Título y descripciones](#títulos-y-descripciones)
1. [Tabla Periódica de los Elementos HTML](#tabla-peroódica-de-los-elementos-html)
1. [Encabezados](#encabezados)
1. [Etiquetas básicas de texto](#etiquetas-básicas-de-texto)
1. [Etiquetas de texto semánticas](#etiquetas-de-texto-semánticas)
1. [Etiquetas de salto](#etiquetas-de-salto)
1. [Etiquetas de formateo](#etiquetas-de-formateo)
1. [Etiquetas semánticas estructurales](#etiquetas-semánticas-estructurales)
1. [Interpretando la semántica en HTML](#interpretando-la-semántica-en-html)
1. [Etiquetas de línea y de bloque](#etiquetas-de-línea-y-de-bloque)
1. [Estilos en HTML](#estilos-en-html)
1. [Scripts en HTML](#scripts-en-html)
1. [Imágenes](#imágenes)
1. [Vectores](#vectores)
1. [Figuras](#figuras)
1. [Listas ordenadas](#listas-ordenadas)
1. [Listas desordenadas](#listas-desordenadas)
1. [Listas de definición](#listas-de-definición)
1. [Tablas](#tablas)
1. [Enlaces](#enlaces)
1. [Enlaces internos](#enlaces-internos)
1. [Enlaces y protocolos especiales](#enlaces-y-protocolos-especiales)
1. [Elementos interactivos](#elementos-interactivos)
1. [Audio y video](#audio-y-video)
1. [Iframes](#iframes)
1. [Elementos de formulario](#elementos-de-formularios)
1. [Atributos de inputs y formularios](#atributos-de-inputs-y-formularios)
1. [Select, Radios y Checkbox](#selects-radios-y-checkbox)
1. [Formulario de contacto](#formualrio-de-contacto)
1. [DataAtributtes](#dataatributtes)
1. [Metaetiquetas para SEO y Móviles](#metaetiquetas-para-seo-y-móviles)
1. [Metaetiquetas para redes sociales](#metaetiquetas-para-redes-sociales)
1. [Accesibilidad web](#accesibilidad-web)

---

## Documentación

- ### [MDN (Mozilla Developer Network)](https://developer.mozilla.org/en-US/)

- ### [htmlreference](https://htmlreference.io/)

[⬆️](#índice)

---

## Introducción
HTML es el lenguaje de marcado que nos define el contenido que vemos a través de los navegadores.

[⬆️](#índice)

---

## Software necesario
- Navegador Web
    - Recomendados
        - Chrome
        - FireFox
    - No Recomendados
        - Internet Explorer

- Editor de código: Es una herramienta que nos permite escribir código
    - Recomendaciones
        - Sublime Text
        - Atom (GitHub)
        - Brackets (Adobe)
        - _**Visual Studio Code**_ (Microsoft)

[⬆️](#índice)


---

## Creando mi primer documento HTML

- **IMPORTANTE:** Crear una carpeta para escribir los archivos de HTML.

- Se suele llamar _index_ al archivo principal de HTML por convención en el desarrollo web.

- Para nombrar archivos: 
    - _nombre_archivo.extensión_
        - v.gr.: **index.html**
<br><br>
- Para ver el contenido del archivo HTML, se tiene que ir a la carpeta que contiene el archivo HTML y dar doble clic (En el Explorador de Archivos).

[⬆️](#índice)

---

## Emmet.io y atajos de VS Code

- VS Code tiene integrado el complemento Emmet.

- **Emmet** nos permite escribir código HTML y CSS de forma muy rápida.

- [Documentación de Emmet](https://emmet.io)

- [Atajos para VS Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

[⬆️](#índice)

---

## Introducción a HTML y su documentación

- **HTML**: Defnie el contenido.
- **CSS**: Da estilos al contenido.
- **Javascript**: Programar contenido.

- HTML, CSS y JS se les conoce como estándares ya que cualquier navegador utilizan estas tecnologías para pintar la pagina en la web.

- Estas tecnologías están regidas por personas y deliminan los avances que los navegadores tienen que aceptar.

    - W3G y WhatWG son grupos de personas que rigen los estándares.
<br>
<br>

- Para leer la **documentación** de HTML se usa:

    - ### [MDN (Mozilla Developer Network)](https://developer.mozilla.org/en-US/)

        - Quienes sus desarrolladores son los mismos del navegador Firefox (Documentación NO oficial).

    - ### [htmlreference](https://htmlreference.io/)
        - Página que contiene referencias de HTML.

- 

[⬆️](#índice)

---

## Estructura básica de un documento HTML

### Estructura
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
- **HTML (Hyper Text Markup Language)**

- **Hyper**: Del griego que significa _"Navegación"_.

- HTML **NO** es un lenguaje de programación, es un <u>lenguaje de marcado</u>.

- Al crear el archivo, se debe crear con la extensión _**.html**_

- Los elementos del HTML son marcas o etiquetas. Empiezan con un **<** para abrir una etiqueta y cierra con un **>** (picoparéntesis).

- Hay etiquetas que tienen etiquetas de cierre (abre y cierra en diferente línea de código) y hay otras etiquetas que por su naturaleza cierran en la misma línea.

    | Etiqueta de apertura y cierre | Etiqueta de cierre |
    | :---: | :---: |
    | ```<head></head>``` | ``` <meta> ``` |

- Las etiquetas HTML pueden tener **atributos**.

- Para generar la [estructura básica de HTML](#estructura) (Requiere Emmet): ``! + tab``

- Las etiquetas se escriben en minúsculas (como buena práctica, ya que HTML no distingue entre mayúsculas y minúsculas). _Salvo la etiqueta Doctype_.

- ``<p></p>``: Etiqueta de párrafo.

- El documento HTML está compuesto por dos partes:

    - **_head_**
        - Enlazar a otros archivos (CSS, JS) o enlaces, títulos, descripciones. Toda la información dentro del head es información **meta** ya que es información que habla de la página pero los usuarios no vemos. Esta información **meta** es más usada los algoritmos que posicionan las páginas en los buscadores.

    - **_body_**
        - Todo lo que queramos que se vea va dentro del body.

- Es importante respetar la jerarquía de cómo han sido definidas las etiquetas. No va a arrojar error por no ser un lenguaje de programación pero al tener mal definidas las etiquetas según su jerarquía, puede que el aspecto visual este mal.

- Es importante la indentación (tabulación) para ser ordenado.

[⬆️](#índice)

---

## Comentarios en HTML

- Un comentario es un texto o notas que el navegador no va a interpretar. Son notas para nosotros dentro del código.

``` HTML
<!-- Esto es un comentario -->

<!-- 
    Esto
    es un
    comentario
 -->

```

[⬆️](#índice)

---

## Etiqueta HTML y el atributo _lang_

- La etiqueta ``<html>`` es la que se encarga de tener la cabeza como el cuerpo del documento.

- Desde HTML5 (2009) la W3C hizo marketing para HTML. (En estas épocas se hacían las páginas web con Flash).

- Por cuestiones de posicionamiento es muy importante especificar el atributo del idioma en la etiqueta HTML.

- El atributo _lang_ especifica el idioma de la página (idioma del contenido). No es tan necesario especificar el idioma del contenido hasta cierto punto.

    - **_en_**: Inglés
    - **_jp_**: Japonés
    - **_es_**: Español
    - **_es-DOMINIO PAIS_**: Español local. Es recomendable para casos y contextos muy particulares. (El dominio del país va en MAYÚSCULAS).
        - es-MX: Español mexicano
        - es-CL: Español chileno.
    - **_es-419_**: Español latino y región del Caribe.

[⬆️](#índice)

---

## Etiqueta _DOCTYPE_

- Antes del HTML5, hubo HTML1, HTML2, HTML3, XHTML (fusión entre HTML y XML), HTML4 y en cada una de esas versiones había diferentes tipos de documentos y el DOCTYPE se volvía muy largo ya que se tenía que insertar una URL que especificaba la versión de HTML que se estaba usando en ese documento.

- Dependiendo del tipo de documento (tipo de DOCTYPE) algunas etiquetas eran soportadas y otras no o la visualización de las etiquetas era diferente.

- Por estas situaciones y dificultades, la W3C estandarizó los tipos de documentos y aceptó todas las etiquetas (todo en un solo tipo de versión y documento).

- El DOCTYPE especifica un tipo de documento con la versión **5**.

[⬆️](#índice)

---

## Atributo _charset_

- _charset_ hace referencia al juego de caracteres con la que está codifcada una página (relacionado con el idioma).

- UTF-8 es el juego de caracteres estándar.

- Si no se especifica el tipo de charset, los navegadores viejos no van a reconocer algunos caracteres como la ñ.

``` HTML
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
- Se refiere a ajustar la configuración de Microsoft Edge a Internet Explorer.
- Esta etiqueta se puede borrar ya que no es un estándar.

[⬆️](#índice)

---

## Metaetiqueta _Viewport_

- La etiqueta del _viewport_ hace referencia a la zona visible del navegador donde se renderiza el contenido de HTML. Es importante la etiqueta que sea definida en todos los documentos HTML porque es la que le dice a los dispositivos cómo se va a adaptar el contenido.

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- **Por cuestiones de resposive design, es muy importante y hay que incluirla en todos los documentos HTML.**

- ``width=device-width``: El ancho del documento HTML se va a adaptar al ancho del dispositivo.

- ``initial-scale=1.0``: La escala inicial del contenido va a iniciar en 1 (100%).


[⬆️](#índice)

---

## Títulos y Descripciones

- El título se refiere al título del documento HTML (título tiene que ser referente a lo que se va a encontrar el usuario en la página que está visitando).

    <p style="font-size: 18px"><b>IMPORTANTE: El título debe estar entre 55 y 65 caracteres de longitud.</b></p>

- La metadescripción se defice:

```HTML
<meta name="description" content="Descripción de la página">
```
- ``name="description"``: Sección que va por default.

- ```content="Descripción de la página"```: Descripción de la página.
    <p style="font-size: 18px"><b>IMPORTANTE: La descripción no debe rebasar los 165 caracteres.</b></p>

- Las etiquetas de título y metadescripción nos va a ayudar mucho en el posicionamiento (SEO). Con esto hacemos SEO a nivel código.

- Un error muy común es dejarle el título y la metadescripción igual en todos los documentos HTML. Esto es un gran error porque si el sitio empieza a mejorar su posicionamiento, no se va a permitir el subíndice en los buscadores web (partes más visitadas de la página).


[⬆️](#índice)

---

## Tabla Peroódica de los Elementos HTML

![Tabla periodica de los Elementos HTML](img/html-cheat-sheet.jpg)

[⬆️](#índice)

---

## Encabezados

[⬆️](#índice)

---

## Etiquetas básicas de texto

[⬆️](#índice)

---

## Etiquetas de texto semánticas

[⬆️](#índice)

---

## Etiquetas de salto

[⬆️](#índice)

---

## Etiquetas de formateo

[⬆️](#índice)

---
## Etiquetas semánticas estructurales

[⬆️](#índice)

---

## Interpretando la semántica en HTML

[⬆️](#índice)

---

## Etiquetas de línea y de bloque

[⬆️](#índice)

---

## Estilos en HTML

[⬆️](#índice)

---

## Scripts en HTML

[⬆️](#índice)

---

## Imágenes

[⬆️](#índice)

---

## Vectores

[⬆️](#índice)

---

## Figuras

[⬆️](#índice)

---

## Listas Ordenadas

[⬆️](#índice)

---

## Listas Desordenadas

[⬆️](#índice)

---

## Listas de Definición

[⬆️](#índice)

---

## Tablas

[⬆️](#índice)

---

## Enlaces

[⬆️](#índice)

---

## Enlaces Internos

[⬆️](#índice)

---

## Enlaces y protocolos especiales

[⬆️](#índice)

---

## Elementos Interactivos

[⬆️](#índice)

---

## Audio y Video

[⬆️](#índice)

---

## Iframes

[⬆️](#índice)

---

## Elementos de Formularios

[⬆️](#índice)

---

## Atributos de Inputs y Formularios

[⬆️](#índice)

---

## Selects, Radios y Checkbox

[⬆️](#índice)

---

## Formualrio de Contacto

[⬆️](#índice)

---

## DataAtributtes

[⬆️](#índice)

---

## Metaetiquetas para SEO y Móviles

[⬆️](#índice)

---

## Metaetiquetas para Redes Sociales

[⬆️](#índice)

---

## Accesibilidad Web

[⬆️](#índice)