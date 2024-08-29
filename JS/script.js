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
