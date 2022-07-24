// Variables
const showNavigation = document.querySelector("#showNavigation");
const showForm = document.querySelector('#showForm');
const closeForm = document.querySelector('#closeForm');

const navigation = document.querySelector('#navigation');
const form = document.querySelector("#form");

const headerSection = document.querySelector(".header-section");

// Evento Principal.
window.addEventListener('DOMContentLoaded', () => {

    showNavigation.innerHTML = '<i class="fa-solid fa-bars"></i>';

    showNavigation.addEventListener('click', () => {
        handleNavigation();
    });

    showForm.addEventListener('click', () => {
        handleForm();
        handleNavigation();
    })

    closeForm.addEventListener('click', () => {
        form.classList.remove('active-form');
    });

    window.addEventListener('scroll', () => {
        handleSticky();
    })
});

// Funciones

function handleNavigation () {

    const iconClose = '<i class="fa-solid fa-xmark"></i>';
    const iconBar = '<i class="fa-solid fa-bars"></i>';

    if (screen.width < 900) {
        return;
    }

    if (showNavigation.innerHTML === iconBar) {
        showNavigation.innerHTML = iconClose
        navigation.classList.add('active-nav')
    }else {
        showNavigation.innerHTML = iconBar;
        navigation.classList.remove('active-nav')
    }
}

function handleForm () {
    if (screen.width < 900) {
        return;
    }

    if (!form.classList.contains('active-form')) {
        form.classList.add('active-form');
    }
}

function handleSticky () {
    if (window.scrollY > 0) {
        headerSection.classList.add('sticky');
    }else {
        headerSection.classList.remove('sticky');
    }
}