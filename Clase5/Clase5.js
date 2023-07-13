//generar 1000 numeros aleatorios y contar las vecds en las que se repite, con numeros que vayan hasta el 20
let arreglo = []
for(let x=0; x<1000; x++){
    let aleatorio = Math.floor(Math.random() * 21);
    arreglo.push(aleatorio);
}
console.log(arreglo);
//contar las veces en las que se repitan los numeros
// EJEMPLO
