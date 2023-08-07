const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
})

let menu = document.querySelector('#menu-icon');
let navber = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navber.classList.toggle('open');
}