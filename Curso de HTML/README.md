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


[⬆️](#índice)

---

## Comentarios en HTML

``` HTML
<!--  -->
```

[⬆️](#índice)

---

## Etiqueta HTML y el atributo _lang_

[⬆️](#índice)

---

## Etiqueta _DOCTYPE_

[⬆️](#índice)

---

## Atributo _charset_

[⬆️](#índice)

---

## Metaetiqueta _Viewport_

[⬆️](#índice)

---

## Títulos y Descripciones

[⬆️](#índice)

---

## Tabla Peroódica de los Elementos HTML

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