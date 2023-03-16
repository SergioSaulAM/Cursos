/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  //TODO: - Todos los datos del objeto son obligatorios.
  //TODO: - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  //TODO: - Valida que el título no rebase los 100 caracteres.
  //TODO: - Valida que el director no rebase los 50 caracteres.
  //TODO: - Valida que el año de estreno sea un número entero de 4 dígitos.
  //TODO: - Valida que el país o paises sea introducidos en forma de arreglo.
  //TODO: - Crea un método estático que devuelva los géneros aceptados*.
  //TODO: - Valida que los géneros sean introducidos en forma de arreglo.
  //TODO: - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  //TODO: - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  //TODO: - Crea un método que devuelva toda la ficha técnica de la película.
  //TODO: - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.


    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
    // Destructuración
    constructor({id, titulo, director, anio, pais, genero, calificacion}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        // Validación de campos de película
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnio(anio);
        this.validarPais(pais);
        this.validarGeneros(genero);
        this.validarCalificacion(calificacion);
    }

    // ================ MÉTODOS GÉNEROS ================

    static get listaGeneros() {
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
    }

    static generosAceptados() {
        return console.info(`"GÉNEROS ACEPTADOS" \n*${Pelicula.listaGeneros.join('\n*')}`)
    }

    // =================== FICHA TÉCNICA ==================

    fichaTecnica() {
        console.log(`FICHA TÉCNICA \nTítulo: ${this.titulo} \nDirector: ${this.director} \nAño: ${this.anio} \nPaís: ${this.pais.join("-")} \nGénero(s): ${this.genero.join(", ")} \nCalificación: ${this.calificacion}\nIMDB ID: ${this.id}`);
    }

    // ================ VALIDACIONES DE TIPOS DE VALORES DE PELICULA ================

    validarCadena(propiedad, valor) {
        if (!(valor)) return console.warn(`${propiedad} "${valor}" está vacío.`);
        if (typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto.`);

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`);
        
        return true;
    }

    validarNumero(propiedad, valor) {
        if (!(valor)) return console.warn(`${propiedad} "${valor}" está vacío.`);
        if (typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresado, NO es un número.`);
        
        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!(valor)) return console.warn(`${propiedad} "${valor}" está vacío`);
        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado NO es un arreglo.`);
        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos.`);
        for (const i of valor) {
            if (typeof i !== 'string') return console.error(`El valor "${i}" ingresado NO es una cadena de texto.`);
        }

        return true;
    }

    // ================ VALIDACIONES DE VALORES DE PELICULA ================

    validarIMDB(id) {
        if(this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`)
        }
    }

    validarTitulo(titulo) {
        if(this.validarCadena("Título", titulo)) {
            this.validarLongitudCadena("Titulo", titulo, 100);
        }
    }
    
    validarDirector(director) {
        if(this.validarCadena("Director", director)) {
            this.validarLongitudCadena("Director", director, 50);
        }
    }

    validarAnio(anio) {
        if (this.validarNumero("Año de estreno", anio)) {
            // ^: No debe haber nada antes; $: No debe haber nada después.
            if (!(/^([0-9]){4}$/.test(anio))) return console.error(`Año de estreno "${anio}" no es válido, debe ser un número de 4 dígitos.`)
        }
    }

    validarPais(pais) {
        this.validarArreglo("País", pais);
    }

    validarGeneros(genero) {
        if(this.validarArreglo("Géneros", genero)) {
            for (const gen of genero) {
                if (!(Pelicula.listaGeneros.includes(gen))) {
                    console.error(`Género(s) incorrectos: \n*${genero.join("\n*")}`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificación", calificacion)) {
            // ^: No debe haber nada antes; $: No debe haber nada después.
            return (calificacion < 0 || calificacion > 10) ? console.error("La calificación tiene que estar en un rango entre 0 y 10.") : this.calificacion = calificacion.toFixed(1);
        }
    }
}

//Pelicula.generosAceptados();

/* const avengers = new Pelicula({
    id: "tt4154796",
    titulo: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    anio: 2018,
    pais: ['Estados Unidos'],
    genero: ["Action", "Adventure", "Drama", "Sci-Fi"],
    calificacion: 8.4
});

avengers.fichaTecnica() */

const misPelis = [
{
    id: "tt4154796",
    titulo: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    anio: 2018,
    pais: ['Estados Unidos'],
    genero: ["Action", "Adventure", "Drama", "Sci-Fi"],
    calificacion: 8.4
},
{
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    anio: 2006,
    pais: ['Estados Unidos'],
    genero: ["Action", "Drama", "Sport"],
    calificacion: 7.1
},
{
    id: "tt0468569",
    titulo: "The Dark Knigh",
    director: "Christopher Nolan",
    anio: 2008,
    pais: ['Estados Unidos', 'Reino Unido'],
    genero: ["Action", "Crime", "Drama"],
    calificacion: 9.0
}];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());