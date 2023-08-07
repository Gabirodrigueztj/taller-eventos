

let elboton = document.getElementById("boton");
let botonSaludar = document.getElementById("botonSaludar");


    botonSaludar.addEventListener("click", function() 
    {
    mostrarAlerta();
    });


        function mostrarAlerta() 
        {
        alert("Hola! soy el div");
        }

elboton.style.padding = "5px";
elboton.style.backgroundColor = "green";