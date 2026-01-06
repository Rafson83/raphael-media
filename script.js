// Skrypt dla strony w budowie
document.addEventListener('DOMContentLoaded', function() {
    console.log('Raphael Media - strona w budowie załadowana!');
    
    // Animacja logo na hover
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
});