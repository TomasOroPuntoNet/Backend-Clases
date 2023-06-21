// let ArrayPersonas = [
//     {
//         nombre: "Juan",
//         apellido:"Perez"
//     },
//     {
//         nombre: "Maria",
//         apellido:"Lopez"
//     },
//     {
//         nombre: "Pedro",
//         apellido:"Garcia"
//     }
// ]
// ArrayPersonas.forEach(element => {
//     console.log(typeof(element))
//     console.log(typeof(element.nombre))
// })

class Contador{
    constructor(nombre){
        this.nombre = nombre;
        this.valor = 0;
    }
    static contadorGlobal = 0;
    incrementar(){
        this.valor++;
        this.contadorGlobal++;
    }
    obtenerValor(){
        return this.valor;
    }

    static obternerContadorGlobal(){
        return Contador.contadorGlobal;
    }

    getResponsable(){
        return this.nombre;
    }
}

let contador1 = new Contador("Juan");
console.log(contador1.getResponsable())
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
console.log(contador1.obtenerValor())

let contador2 = new Contador("Maria");
contador2.incrementar()
contador2.incrementar()
console.log(contador2.obtenerValor())

console.log(Contador.contadorGlobal())
// console.log(contador1.obtenerValor())
// console.log(contador1.obternerContadorGlobal())