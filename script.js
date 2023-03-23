const h4 = document.querySelector('.header__logo');

h4.addEventListener('mouseenter', function() {
    h4.style.color = 'yellow';
});

h4.addEventListener('mouseleave', function() {
    h4.style.color = '#fff';
});



const button = document.getElementById('acakWarna'); 
const testimonial = document.querySelector('.section-testimonials');

acakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1); // math round, math floor = pembulatan ke bawah , math ceil = pembulatan ke atas
    const g = Math.round(Math.random() * 255 + 1); 
    const b = Math.round(Math.random() * 255 + 1); 
    testimonial.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';  
});