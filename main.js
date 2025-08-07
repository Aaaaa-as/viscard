let header_btn = document.querySelector('.header_btn');
header_btn.addEventListener('click', function() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
})