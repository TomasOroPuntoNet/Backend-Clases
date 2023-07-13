import moment from "moment";
//calculadora de edad

let nowTime = moment();
let fechaDeNacimieto = moment("12/01/2001","DD/MM/YYYY");
console.log(nowTime)
console.log("es una fecha valida:", fechaDeNacimieto.isValid()? "si" : "no");

console.log("Desde que naciste hasta hoy, han transcurrido", nowTime.diff(fechaDeNacimieto, "years"), "años");