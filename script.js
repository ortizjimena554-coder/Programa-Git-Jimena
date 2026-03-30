const form = document.getElementById("formCita");
const tabla = document.getElementById("tablaCitas");

form.addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let especialidad = document.getElementById("especialidad").value;
let fecha = document.getElementById("fecha").value;
let hora = document.getElementById("hora").value;

let fila = document.createElement("tr");

fila.innerHTML = `
<td>${nombre}</td>
<td>${especialidad}</td>
<td>${fecha}</td>
<td>${hora}</td>
<td>
<button class="btnModificar">Modificar</button>
<button class="btnCancelar">Cancelar</button>
</td>
`;

tabla.appendChild(fila);



fila.querySelector(".btnCancelar").onclick = function(){

fila.remove();

};



fila.querySelector(".btnModificar").onclick = function(){

let nuevoNombre = prompt("Nuevo nombre:", nombre);
let nuevaFecha = prompt("Nueva fecha:", fecha);
let nuevaHora = prompt("Nueva hora:", hora);

fila.children[0].textContent = nuevoNombre;
fila.children[2].textContent = nuevaFecha;
fila.children[3].textContent = nuevaHora;

};



form.reset();

});