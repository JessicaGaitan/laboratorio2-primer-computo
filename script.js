// getElementById
const select = document.getElementById("grupoSelect");
const info = document.getElementById("info");
const imagen = document.getElementById("imagenGrupo");
const rating = document.getElementById("rating");
const valorRating = document.getElementById("valorRating");


document.getElementById("btnInfo").addEventListener("click", function() {

    if (select.value === "bts") {
        info.textContent = "BTS es un grupo surcoreano formado en 2013.";
        imagen.src = "img/bts.jpg";
    }

    if (select.value === "blackpink") {
        info.textContent = "BLACKPINK es un grupo femenino de YG Entertainment.";
        imagen.src = "img/blackpink.jpg";
    }

    if (select.value === "straykids") {
        info.textContent = "Stray Kids es un grupo de JYP Entertainment.";
        imagen.src = "img/skz.jpg";
    }

});


document.querySelector("#rating").addEventListener("input", function() {
    valorRating.textContent = rating.value;
});


let botones = document.querySelectorAll("button");
botones.forEach(function(boton){
    boton.addEventListener("mouseover", function(){
        boton.style.transform = "scale(1.1)";
    });
    boton.addEventListener("mouseout", function(){
        boton.style.transform = "scale(1)";
    });
});


document.getElementById("btnColor").addEventListener("click", function(){
    document.body.style.background = "linear-gradient(to right, #a18cd1, #fbc2eb)";
});