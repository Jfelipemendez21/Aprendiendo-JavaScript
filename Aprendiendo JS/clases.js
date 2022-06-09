class Libro{
    constructor(titulo, autor, año, genero){
     this.title= titulo
     this.aut= autor
     this.year= año
     this.gen= genero
    }
info_lib(){
    return `${title}, es un libro de ${autor}, creado en el año ${año}, y tiene como genero el ${genero}`

}
libro1= new Libro ("100 años de soledad", "Gabriel garcia Marquez", 1981,fantasia );

}
