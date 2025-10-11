/* METODOS PARA ARREGLOS */

// push(nuevo) = añade un elemento hasta el final del arreglo
// pop() = elimina el ultimo elemento
// unshift(nuevo) = añade un elemento hasta el inicio del arreglo
// shift() = elimina el primer elemento

// indexOf() = devuelve el indice del elemento
// includes() = verifica si existe el elemento
// find() = devuelve el primer elemento que cumpla una condicion
// findIndex() = devuelve el indice del primer elemento que cumple la condicion

// foreach() = ejecuta una funcion para cada elemento
// map() = crea un nuevo arreglo transformando cada elemento
// filter() = crea un nuevo arreglo con los que cumplan una condición
// reduce() = 

// sort()
// reverse()
// splice()
// slice

var alumnos = [
    "Carlos Manuel",
    "Cesar Oziel",
    "Regina", 
    "Diego Leonardo",
    "Andrea Carolina",
    "Mayela Mayté", 
    "Eder Abraham",
    "Diego Alonso",
    "Naomi Michelle", 
    "Regina", // Dariela
    "Carlos",
    "Eder Abisai"
];

// elimina el ultimo elemento
alumnos.pop();

// añadimos un nuevo elemento al final del arreglo
alumnos.push("Edgar Aurelio");

console.log(alumnos);

// elimina el primer elemento
alumnos.shift();

// añadimos un nuevo elemento al inicio del arreglo
alumnos.unshift("Axel Gabriel");

// mostrar
console.log(alumnos);


alumnos[4] = "Carlos Manuel";

console.log(alumnos);

console.log(alumnos.indexOf("Eder Abisai"));
console.log(alumnos.includes("Eder Abisai"));

console.log(alumnos.find(nombre => nombre === "Regina"));
// equivalente a 
// for(var i = 0; i < alumnos.length; i++){
//     if(alumnos[i] == "Regina"){
//         console.log(alumnos[i]);
//         break;
//     }
// }

console.log(alumnos.findIndex(nombre => nombre == "Regina"));// equivalente a 
// for(var i = 0; i < alumnos.length; i++){
//     if(alumnos[i] == "Regina"){
//         console.log(i);
//         break;
//     }
// }


var alumnos = [
    {nombre: "Carlos Manuel", apellidoPaterno: "Valerio", apellidoMaterno: "Rios", matricula: 1},
    {nombre: "Eder Abraham", apellidoPaterno: "Sampayo", apellidoMaterno: "Gonzales", matricula: 2},
    {nombre: "Edgar Aurelio", apellidoPaterno: "Santiago", apellidoMaterno: "Santiago", matricula: 3},
    {nombre: "Andrea Carolina ", apellidoPaterno: "Alfaro", apellidoMaterno: "Sanchez", matricula: 4},
    {nombre: "Carlos Hector", apellidoPaterno: "Leal", apellidoMaterno: "Delgado", matricula: 5},
    {nombre: "Regina", apellidoPaterno: "Hernandez", apellidoMaterno: "Rodriguez", matricula: 6},
    {nombre: "Brandon Jahir", apellidoPaterno: "Reyna", apellidoMaterno: "Marroquin", matricula: 7},
    {nombre: "Regina Dariela", apellidoPaterno: "Sosa", apellidoMaterno: "Huerta", matricula: 8},
    {nombre: "Brando Uriel", apellidoPaterno: "Quezada", apellidoMaterno: "Gamez", matricula: 9},
    {nombre: "Santiago", apellidoPaterno: "Perez", apellidoMaterno: "Aguirre", matricula: 10}
]


let listaAlumnos = document.getElementById("listaAlumnos");
let btnConsulta = document.getElementById("btnConsulta");
let filtroAlumno = document.getElementById("filtroAlumno");

document.addEventListener("DOMContentLoaded", mostrarAlumnos);
btnConsulta.addEventListener("click", buscarAlumno);

function obtenerNombre(e){
    return e.nombre + " " + e.apellidoPaterno + " " + e.apellidoMaterno;
}

function mostrarAlumnos(){
    listaAlumnos.replaceChildren();
    for(var i = 0; i < alumnos.length; i++){
        let alumno = document.createElement("li");
        alumno.textContent = alumnos[i].matricula + " - " + obtenerNombre(alumnos[i]);
        listaAlumnos.appendChild(alumno);
    }
};

function buscarAlumno(){
    const busqueda = filtroAlumno.value;
    const filtro = busqueda + ".*"; 
    const regex = new RegExp(`^${filtro}.*$`, "i");
    const alumnoEncontrados = alumnos.filter(estudiante => regex.test(estudiante.nombre) || regex.test(estudiante.apellidoMaterno) || regex.test(estudiante.apellidoPaterno));

    if (busqueda === ""){
        mostrarAlumnos();
    }
    else if (alumnoEncontrados.length > 0){
        listaAlumnos.replaceChildren(); // limpiamos
        alumnoEncontrados.forEach(element => {
            let encontrado = document.createElement("li");
            var texto = element.matricula + " - " + obtenerNombre(element)
            encontrado.textContent = texto;
            listaAlumnos.appendChild(encontrado);
        });
    }
    else{
        listaAlumnos.replaceChildren();
        let encontrado = document.createElement("li");
        encontrado.textContent = "No encontrado";
        listaAlumnos.appendChild(encontrado);
    }
        
};