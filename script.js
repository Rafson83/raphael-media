// Prosty skrypt JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Raphael Media strona załadowana!');
    
    // Smooth scroll dla linków nawigacji
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Przykład interaktywności - kliknięcie w logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            alert('Witaj w Raphael Media!');
        });
    }
});