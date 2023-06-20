//Arrow functions
const sum = (a, b) => a + b;

//Callbacks
const sum2 = (a, b, callback) => {
    const result = a + b;
    callback(result);
}

sum2(1, 2, (result) => {
    console.log(result);
})

const numbers = [1, 2, 3, 4, 5];
//funciones que contienen callbacks de manera implicita: ForEach, Map, Filter, OnClick(react). Ejemplo con map:
//Recordar: En este ejemplo, number * 2 es una expresión de una sola línea, por lo que se puede utilizar una función de flecha implícita sin return. Sin embargo, si la función es más compleja o contiene varias líneas de código, se debe utilizar explícitamente return. Es importante tener en cuenta que omitir return en una función más compleja puede llevar a errores y comportamientos inesperados
let valoresModificados = numbers.map(dato => dato * 2);
    
// console.log(valoresModificados);

//otro ejemplo: si nuestro dato es multiplo de dos... 

const funcionCallback = dato => {
    if(dato % 2 == 0) {
        //si nuestro dato da 0 como reciduo
        return `par: ${dato}`
    } else {
        return `impar: ${dato}`;
    }
}

// const valoresModificados2 = numbers.map(funcionCallback);

// console.log(valoresModificados2);

//Creando nuestra propia funcionMap
//Este código define una función functionMap que toma como argumentos un arreglo arreglo y una función de devolución de llamada callback. Luego, crea un nuevo arreglo nuevoArreglo iterando a través de arreglo y aplicando la función callback a cada elemento. Finalmente, devuelve el nuevo arreglo. Esencialmente, se trata de una implementación simplificada de la función Array.map() en JavaScript.     
const funcionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for(let i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(callback(arreglo[i]));
    }
    return nuevoArreglo;
}

// console.log(funcionMap(numbers, dato => dato * 2));

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const operacion = (numeroA, numeroB, callback) => {
    console.log("no se que operacion devolvere, pero funciono");
    let resultado = callback(numeroA, numeroB);
    console.log(resultado);
}

// operacion(3, 4, multiplicar);
// operacion(3, 4, dividir);
// operacion(3, 4, sumar);
// operacion(3, 4, restar);

//Promesas
const divisionConPromesa = (dividendo, divisor) =>{
    return new Promise((resolve, reject) => {
        if(divisor == 0) {
            reject("No se puede dividir entre 0");
        } else {
            resolve(dividendo / divisor);
        }
    });
}
divisionConPromesa(1, 0).then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})

//Async/Await. Formas de definirlas:
    // async function division(){

    // }

    // const divisionConFlecha = async () => {
        // try{

        // }
        // catch{}
    // }

const asyncArrowDivision = async (number1, number2) => {
    try {
        const resultado = await divisionConPromesa(number1, number2);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }   
}
// asyncArrowDivision(10, 2);

//Calculadora positiva HANDS ON LAB

const funcionSumaAsync = async (a, b) => {
    return new Promise((resolve, reject) => {
        if(a === 0 || b === 0) {
            reject("Operacion innecesaria");
        } else if(a + b < 0) {
            reject("La calculadora solo devolvera valores positivos");
        } 
        else {
            resolve(`El resultado de mi suma asincrona es ${a + b}`);
        }
    })
}

funcionSumaAsync(1, -1).then(resultado => {
    console.log(resultado);
})