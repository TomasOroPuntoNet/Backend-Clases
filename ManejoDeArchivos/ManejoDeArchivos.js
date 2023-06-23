//Vamos a ver persistencia en memoria... 
//Se trata de una implementacion que basicamente nos ahorra dinero. Imaginemos que complicado seria si cada vez que terminamos de usar un programa, perdemos todos los datos. Molesto no ? justamente para esto esta la persistencia en memoria. Asi como perdemos dinero nosotros, tambien lo hacen las empresas (de hecho cuando una pagina es gratis, el producto somos nosotros, ya que se venden los datos).
//La primera solucion que se dio para realizar la persistencia en memoria fue la de guardar la informacion en archivos. Esto lo veremos en especifico con Filesystem (Fs), paquete de NodeJS. Este es un sistema que nos permite el famoso CRUD (Create, Read, Update, Delete), de manera sincronica y asincronica



//SetTimeOut y SetInterval
// setTimeOut: lo que realizamos es que se ejecute la funcion despues de 3 segundos
function ExampleSetTimeOut (){
    setTimeout(() => {
    console.log("Hola");
},3000)
}
//setInterval: lo que realizamos es que se ejecute la funcion cada 3 segundos
function ExampleSetInterval (){
    setInterval(() => {
    console.log("Hola");
},3000)
}
// ExampleSetInterval();
// ExampleSetTimeOut();

//Realizando un contador que muestre en consola
const contador = ()=>{
    let counter = 0;
    let timer = setInterval(()=>{
        
    console.log(counter++);
    
    if(counter > 5){
        clearInterval(timer);
    }
    }, 1000);
}
contador();