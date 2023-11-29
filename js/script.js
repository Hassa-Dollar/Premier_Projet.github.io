document.addEventListener('DOMContentLoaded', 
function() {

    const menuBtn = document.querySelector('.menu-btn');

    const navLinks = document.querySelector('nav ul');

    menuBtn.addEventListener('click', 
    function() {

        navLinks.classList.toggle('show')

    })
})