var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var getStarted = document.querySelectorAll('.button.primary-button')
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(getStarted);
// console.dir(getStarted);

for (var i = 0; i < getStarted.length; i++) {
    getStarted[i].addEventListener('click', function(event){
        event.preventDefault();
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}

// backdrop.addEventListener('click', function(event) {
//     event.preventDefault();
//     // mobileNav.style.display = 'none';
//     mobileNav.classList.remove('open');
//     backdrop.classList.remove('open');
//     modal.classList.remove('open');
//     closeModal();
// });

backdrop.addEventListener('click', closeModal);
noButton.addEventListener('click', closeModal);

function closeModal(event) {
    event.preventDefault();
    backdrop.classList.remove('open');
    modal.classList.remove('open');
    mobileNav.classList.remove('open');
}

toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});