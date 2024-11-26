function agrandir(image) {
    var largeur = image.style.width;
    console.log(image.src + ' ' + largeur);
    largeur = parseInt(largeur) + 20;
    image.style.width = largeur + "px";
}

document.addEventListener('DOMContentLoaded', function(event) {
    var images = document.getElementsByClassName("zimage");
    for (var i = 0; i < images.length; i++) {
        images[i].style.width = "200px";
        images[i].addEventListener('click', function(event) {
            agrandir(this);
        }); 
    }
});



