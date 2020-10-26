var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

for (var i = 0; i < selectPlanButtons.length; ++i) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}
if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        // mobileNav.style.display = 'block';
        // backdrop.style.display = 'block';
        mobileNav.classList.add('open');
        backdrop.classList.add('open');
    })
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

ctaButton.addEventListener('animationstart', (event) => {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', (event) => {
    console.log('Animation ened', event);
});

ctaButton.addEventListener('animationiteration', (event) => {
    console.log('Animation iteration', event);
});