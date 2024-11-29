// Get the navbar element
const navbar = document.querySelector('.navbar');

// Add a scroll event listener to change the navbar background when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});