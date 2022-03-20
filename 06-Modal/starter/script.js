'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonClose = document.querySelector('.close-modal');
const buttonsOpen = document.querySelectorAll('.show-modal');

for (let i = 0; i < buttonsOpen.length; i++) {
    buttonsOpen[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

buttonClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
