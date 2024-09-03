const cards = document.querySelectorAll('.card');
const popups = document.querySelectorAll('.popup');

// Ajouter un événement de clic à chaque carte
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Vérifier si la carte est activée (l'input radio associé est sélectionné)
        const associatedInput = card.previousElementSibling; // L'input radio correspondant
        
        if (associatedInput.checked) {
            // Fermer tous les pop-ups
            popups.forEach(popup => popup.classList.remove('active'));
            // Activer le pop-up associé à la carte cliquée
            popups[index].classList.add('active');
        }
    });
});

// Gestion des boutons de fermeture
const closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Fermer le pop-up en cliquant sur le bouton X
        button.closest('.popup').classList.remove('active');
        // Empêcher la propagation de l'événement de clic pour éviter que la carte ne réactive le popup
        event.stopPropagation();
    });
});

// Sélectionne la checkbox du menu burger
const burgerMenuCheckbox = document.getElementById('menu-toggle');

// Sélectionne toutes les autres checkboxes (onglets)
const otherCheckboxes = document.querySelectorAll('.onglet');

// Variable pour stocker la dernière checkbox cochée
let lastCheckedCheckbox = null;

// Coche la première checkbox par défaut au début
if (!document.querySelector('.onglet:checked')) {
    otherCheckboxes[0].checked = true;
    lastCheckedCheckbox = otherCheckboxes[0];
}

// Ajoute un événement sur chaque checkbox sauf celle du menu burger
otherCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            // Stocke la checkbox cochée
            lastCheckedCheckbox = checkbox;
        }
    });
});

// Ajoute un événement sur la checkbox du menu burger
burgerMenuCheckbox.addEventListener('change', function() {
    if (burgerMenuCheckbox.checked) {
        // Désélectionne toutes les autres checkboxes
        otherCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    } else {
        // Restaure la dernière checkbox cochée si elle existe
        if (lastCheckedCheckbox) {
            lastCheckedCheckbox.checked = true;
        } else {
            // Si aucune checkbox n'avait été cochée, coche la première checkbox par défaut
            otherCheckboxes[0].checked = true;
            lastCheckedCheckbox = otherCheckboxes[0];
        }
    }
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
