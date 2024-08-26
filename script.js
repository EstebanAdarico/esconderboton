// Código JavaScript para manejar el modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.getElementById("yesButton").addEventListener("click", function () {
    modal.style.display = "block";
});

span.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Agrega un event listener al botón con el ID "noButton" que se ejecutará cuando se haga clic en él
var palabras = ["estas segura?", "de verdad?", "última oportunidad", "ok, lo acepto"];
var indice = 0; // Índice inicial para recorrer el array

document.getElementById("noButton").addEventListener("click", function () {
    
    // Obtiene el tamaño actual de la fuente del botón con el ID "yesButton"
    var currentSize = parseInt(window.getComputedStyle(document.getElementById("yesButton")).fontSize);
    
    // Incrementa el tamaño de la fuente en 50 píxeles
    var newSize = currentSize + 50;
    
    // Si el nuevo tamaño no excede los 1000 píxeles, entonces:
    if (newSize <= 1000) {
        
        // Cambia el tamaño de la fuente del botón "yesButton" al nuevo tamaño
        document.getElementById("yesButton").style.fontSize = newSize + "px";
        
        // Cambia el texto del botón "yesButton" a "si!!!"
        document.getElementById("yesButton").innerText = "si!!!";
        
        // Cambia el texto del botón "noButton" a la siguiente palabra en el array
        document.getElementById("noButton").innerText = palabras[indice];
        
        // Incrementa el índice para la próxima palabra
        indice++;
        
        // Reinicia el índice si llega al final del array
        if (indice >= palabras.length) {
            indice = 0;
        }
    }
});