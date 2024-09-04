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


window.onload = function() 
{
    window.scrollTo(0, 0.01 * window.innerHeight);
};

document.addEventListener("DOMContentLoaded", function() {
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');



window.addEventListener('scroll', function(){
        let value = window.scrollY;
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        mountains_behind.style.top = value * 0.5 + 'px';
        mountains_front.style.top = value * 0 + 'px';
        text.style.marginRight = value * 3 + 'px';
        text.style.marginTop = value * 1.2 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        header.style.top = value * 0.9 + 'px';
    });
});