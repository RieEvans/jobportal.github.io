



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('fa-bars');
    navbar.classList.remove('active');
};

let textabout = document.getElementById('about-box');
let image = document.getElementById('about-icon');

    window.addEventListener('scroll', () => {

    let value = window.scrollY;
    textabout.style.marginLeft = value * '0' + 'px'
        

})





let dropdown_items = document.querySelectorAll('.job-filter form .dropdown-container .dropdown .list .items');

dropdown_items.forEach(items => {
    items.onclick = () =>{
        items_parent = items.parentElement.parentElement;
        let output = items_parent.querySelector('.output');
        output.value = items.innerText;
    }
})



