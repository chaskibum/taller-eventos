document.addEventListener("DOMContentLoaded", function() {
    let div = document.getElementById("elterror");
    div.addEventListener("click", function() {
        alert("Hola! Soy el terror de Suany... digo, soy el div");
    });

    let boton = document.getElementById("boton");
    boton.addEventListener("click", (event) => {
        event.stopPropagation();
        alert("Hola!")
    });
});
