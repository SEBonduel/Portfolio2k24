const descriptions = document.querySelectorAll('.description');
const popups = document.querySelectorAll('.popup');

descriptions.forEach((description, index) => {
    description.addEventListener('click', () => {
        popups.forEach(popup => popup.classList.remove('active'));
        popups[index].classList.add('active');
    });
});

const closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.popup').classList.remove('active');
    });
});