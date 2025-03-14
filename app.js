let nombres = ["Ana", "Juan", "Carlos", "María"]; // Corrección de 'let'
console.log(nombres);

let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim(); // Capturar y limpiar espacios en blanco

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    actualizarLista();   // Actualizar la lista en la interfaz

    input.value = "";    // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
