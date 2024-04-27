import './style.scss';


// Select the burger menu and the navigation menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

// Add an event listener to the burger menu
burger.addEventListener('click', () => {
    // Toggle the 'nav-active' class on the navigation menu
    nav.classList.toggle('nav-active');
});