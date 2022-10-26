class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    getFullName(){
        return console.log(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}`);
    }

    addMascota(nuevamascota){
        return this.mascotas.push(nuevamascota);
    }

    countMascotas(){
        return console.log(this.mascotas.length);
    }

    addBook(libroNuevo){
        return this.libros.push(libroNuevo);
    }

    getBookNames(){
        return console.log(this.libros.map(libro => libro.nombre));
    }

}

let usuario = new Usuario("Javier","Perez",[{nombre:"El codigo Da Vinci",autor:"Dan Browm"},{nombre:"El principito",autor:"Antoine de Saint-Exupéry"}],["canario","gecko leopardo"]);

usuario.getFullName();
usuario.addMascota("tortuga");
usuario.countMascotas();
usuario.addBook({nombre:"El psicoanalista",autor:"John Katenbach"});
usuario.getBookNames();