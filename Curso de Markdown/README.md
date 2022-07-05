# Aprendiendo _Markdown_

<!-- Párrafos -->

Esto es un párrafo

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque. Mi quis hendrerit dolor magna eget est lorem ipsum. Velit dignissim sodales ut eu sem. Turpis egestas integer eget aliquet nibh praesent. Diam phasellus vestibulum lorem sed risus.




<!-- Aplicar formato a texto -->

Aplicando _cursiva_ (se encierra entre guiones bajos)

Aplicando **Negrita** (se encierra entre asteriscos)

<!-- Se puede aplicar de ambas maneras -->
Aplicando _**Negrita y cursiva**_ / **_Negrita y cursiva_** (se encierra entre asteriscos y guiones bajos)




<!-- Encabezados -->
Encabezados (del nivel 1 al 6)

<!-- Dejar espacio entre espacio y # -->
# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6
## Otro encabezado de ejemplo




<!-- Crear enlace -->
Crear enlace
<!-- [Texto a visualizar](Link) Deben estar juntos [] y () -->
[YouTube](https://www.youtube.com)

<!-- También se pueden enlazar a documentos en la raíz de la carpeta, tomando en cuenta las rutas relativas -->

<!-- Se pueden crear enlaces internos a los mismos headers del mismo documento. Cuando ponemos un enlace, en vez de colocar un link, se coloca un # seguido del header que queremos enlazar.

Los headers funjen como anclas internas.

Si el encabezado tiene varias palabras, los separadores es el - en vez del espacio

Las anclas internas solamente se pueden con los encabezados.
 -->
[Aprendiendo _Markdown_](#aprendiendo-markdown)

[Otro encabezado de ejemplo](#otro-encabezado-de-ejemplo)




<!-- Imágenes -->
Imágenes

<!-- Se declara igual que un enlace. []()

![nombre de la imagen](directorio de la imagen / url / )

El texto del nombre de la imagen, es el equivalente al atributo alt="" de HTML

Se coloca un ! (signo de exclamación) para que se muestre la imagen en el archivo .md o se quita ! si es que se quiere tomar como enlace
 -->

![This is JavaScript](https://jonmircha.com/img/blog/this-is-javascript.jpg)




<!-- Divisiones -->
<!-- (---) Equivale a un <hr> de HTML -->
---

Este es un texto

---

Y este es otro texto




<!-- Listas (ordenadas y desordenadas) -->
<!-- No existe un equivalete en md a las listas de definición -->
Listas

Lista ordenada

<!-- No es necesario definir los siguientes números después del 1. Lo correcto es que todas las viñetas de la lista ordenada sea 1. y que el generador de MD genere los números consecutivos automáticamente -->
1. Primavera
1. Verano
1. Otoño
1. Invierno

Lista desordenada

<!-- Se puede definir con * o - -->

* Privamera
* Verano
* Otoño
* Invierno

- Privamera
- Verano
- Otoño
- Invierno

Sublista

<!-- Se usa la indentación (doble espacio) -->

* Primavera
  * Abril
  * Mayo
    * Cumple de Saúl 🎶
  * Junio
* Verano
  * Julio
  * Agosto
  * Septiembre
    * Mes patrio
* Otoño
* Invierno




<!-- Citas bibliográficas -->
Citas bibliográficas
<!-- Se declara con un > (Mayor que) -->

<!-- Cita en línea -->

> Siempre tienes opción de no tener opinión. - Marco Aurelio

<!-- Cita en bloque (los espacios en blanco deben colocarse un >) -->

> _Todo lo que escuchamos es una opinión, no un hecho._ 
>
> _Todo lo que vemos es una perspectiva, no la verdad._
>
> **Marco Aurelio**




Tablas

| Nombre | Edad | Correo              |
| ------ | ---- | ------------------- |
| Saúl   |  20  | ssaulam34@gmail.com |
| Luis   |  15  | luis@correo.com     |




Código

<!-- Código en línea -> Uso de acento grave `` -->

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `let` labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque. Mi quis hendrerit dolor magna eget est lorem ipsum. Velit dignissim sodales ut eu sem. Turpis egestas integer eget aliquet nibh praesent. Diam phasellus vestibulum lorem sed risus.

<!-- Código en bloque -> 3 acentos graves -->

``` js
function sumar (a, b) {
    return a + b;
}
```

``` html
<h1>Hola mundo</h1>
```
<!-- MD soporta todas las etiquetas de HTML de forma nativa -->

<form>
  <label for="q">Buscar:</label>
  <input type="search" name="q" id="q">
</form>




<!-- Esto es un comentario en Markdown (La misma que en HTML) -->




Escapado de caracteres
<!-- Se pone la barra invertida antes de cada caracter -->
\*\*negrita\*\* y \_cursiva\_