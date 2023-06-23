
const fs = require("fs");

//Vamos a ver persistencia en memoria... 
//Se trata de una implementacion que basicamente nos ahorra dinero. Imaginemos que complicado seria si cada vez que terminamos de usar un programa, perdemos todos los datos. Molesto no ? justamente para esto esta la persistencia en memoria. Asi como perdemos dinero nosotros, tambien lo hacen las empresas (de hecho cuando una pagina es gratis, el producto somos nosotros, ya que se venden los datos).
//La primera solucion que se dio para realizar la persistencia en memoria fue la de guardar la informacion en archivos. Esto lo veremos en especifico con Filesystem (Fs), paquete de NodeJS. Este es un sistema que nos permite el famoso CRUD (Create, Read, Update, Delete), de manera sincronica y asincronica

//esto es CommonJS, es antiguo 
//const fs= require("fs");

fs.writeFileSync("archivo.txt", "Hola mundo, estoy en un archivo");


if(fs.existsSync("archivo.txt")){
    let contenido = fs.readFileSync("archivo.txt", "utf-8"); //utf-8 es el formato de codificacion aceptado por el habla hispana 
    console.log(contenido);

    fs.appendFileSync("archivo.txt", "estoy en un archivo que modifique");

    contenido = fs.readFileSync("archivo.txt", "utf-8");
    console.log(contenido);

    fs.unlinkSync("archivo.txt");
}
fs.writeFileSync("archivo.txt", "Hola mundo, estoy en un archivo")
//fs con callback
fs.readFile("archivo.txt", "utf-8", (err, contenido) => {
    if(err){
        console.log(err);
    }
    console.log(contenido);
})
fs.unlinkSync("archivo.txt");
//fs con promesas: este modulo se utiliza con el metodo .promises, usaremos un .then y .catch

// const date = new Date();
// fs.promises
// .writeFile("archivo.txt", date.toISOString() + "Usando then").then(()=>{
//     console.log("Archivo creado");
// }).catch((error)=>{
//     console.log(error);
// });

const promesa= async () =>{
    try{
        await fs.promises.writeFile("date.txt", date.toISOString() + "Usando async await");
        let result = await fs.promises.readFile("date.txt", "utf-8");
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
//hay algo que esta mal
promesa();


//JSON.stringify() se utiliza para convertir un objeto JavaScript en una cadena JSON. Esto es útil cuando se necesita enviar datos desde un cliente a un servidor o viceversa, ya que JSON es un formato de intercambio de datos ligero que es fácil de leer y escribir para los humanos y fácil de analizar y generar para las máquinas. Las mismas solo soportan formato de texto plano.

//JSON.parse() se utiliza para convertir una cadena JSON en un objeto JavaScript. Esto es útil cuando se recibe datos JSON de un servidor y se necesita utilizar en un script del lado del cliente como un objeto JavaScript. Permite acceder y manipular fácilmente los datos utilizando JavaScript.