
const menu_btn    = document.querySelector(".nav__btn");
const nav_menu    = document.querySelector(".nav__menu");
var open_menu_bar = false;


menu_btn.addEventListener("click",() => {
    if(open_menu_bar===false) {
        menu_btn.classList.add("active");
        nav_menu.classList.add("active");
        open_menu_bar = true;
    }
    else {
        menu_btn.classList.remove("active");
        nav_menu.classList.remove("active");
        open_menu_bar = false;
    }
}

)