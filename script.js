let modalButton = document.querySelector('.modalButton');
let closeModal = document.querySelector('.modal-close');
let modalBg = document.querySelector('.modal-bg');

modalButton.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

closeModal.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');

})