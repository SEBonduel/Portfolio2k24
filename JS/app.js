const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Faire disparaître le preloader
        document.getElementById('preloader').style.opacity = '0';

        // Après la transition (1s), masquer complètement le preloader
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            
            // Ajouter la classe pour afficher le contenu avec une transition
            document.getElementById('content').classList.add('active');
        }, 1000); // Correspond à la durée de la transition CSS (1s)
        
    }, 1200);
});
     