/**
 * Clases-------------------------------------------------
 */

/*class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido
        this.edad = edad;
    } 

    saludar(){
        return `${this.nombre}, ${this.apellido}, ${this.edad}`;
    } 
}

const juan = new Persona("juan", "gutierrez", 15);

console.log(juan);

class Libro{

    constructor(titulo, autor, anio, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
    }

    infolibro(){
        return `${this.titulo}, ${this.autor}, ${this.anio}, ${this.genero}`;
    } 


}


let libros = [];
    

    while(libros.length<1) {

        let titulo = prompt("Introduzca un libro");
        let autor = prompt("Introduzca su autor");
        let anio = parseInt(prompt("Introduzca su año"));
        let genero = prompt("Introduzca su genero").toLocaleLowerCase();

        if(titulo != "" && autor != "" && Array.from(anio).length == 4 && (genero=="aventura" || genero=="terror" || genero=="fantasia")) {
            libros.push(new Libro(titulo, autor, anio, genero));
        }else{
            console.log("si")  
        }
    }  

const mostrarLibros = (libros) => {
    for(let libro of libros) {
        console.log(`${libro}`);
    }
};


let test = introlibros(1);
//mostrarLibros(test);

*/

