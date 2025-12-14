document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.content');

    if(navToggle && mainNav){
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', mainNav.classList.contains('show'));
        });
    }

    // add subtle fade-in for hero and content
    if(hero) hero.classList.add('fade-in');
    if(content) content.classList.add('fade-in');
});
