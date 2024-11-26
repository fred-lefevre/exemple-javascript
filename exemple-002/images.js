document.addEventListener('DOMContentLoaded', function(event) {
    var une_image = document.getElementById("cible");
    une_image.addEventListener('click', function(event) {
        fetch('alea.php')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                this.src = data;
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }); 
});