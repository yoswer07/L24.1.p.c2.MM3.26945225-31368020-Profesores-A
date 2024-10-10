// En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
// un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
// que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
// de la clase Cl_profesor.
// Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total


import Cl_fijo from "./Cl_fijo.js";

let fijo1 = new Cl_fijo("Carlos", 25, 100);
let fijo2 = new Cl_fijo("Carolina", 40, 90);

let salida = document.getElementById("Salida");
salida.innerHTML = `
    <span>Nombre del profesor fijo: ${fijo1.nombre}</span><br>
    <span>Monto del bono: $${fijo1.bono}</span><br>
    <span>Monto del sueldo: $${fijo1.sueldo}</span><br>
    <span>Ingreso total del profesor ${fijo1.nombre} : $${fijo1.montoTotal()}</span><br>
    <br>
    <span>Nombre del profesor fijo: ${fijo2.nombre}</span><br>
    <span>Monto del bono: $${fijo2.bono}</span><br>
    <span>Monto del sueldo: $${fijo2.sueldo}</span><br>
    <span>Ingreso total del profesor ${fijo2.nombre} : $${fijo2.montoTotal()}</span><br>
`;