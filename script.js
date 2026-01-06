// Prosty skrypt JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Raphael Media strona załadowana!');
    
    // Przykład interaktywności
    const header = document.querySelector('h1');
    header.addEventListener('click', function() {
        alert('Witaj w Raphael Media!');
    });
});