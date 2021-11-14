// -------------menu show Y hidden--------------- //
const navMenu = document.getElementById('nav-menu'),
    navtoggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// ------MENU SHOW----- //
//--------validate if constant exists-------//
if (navtoggle) {
    navtoggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//------MENU HIDDEN ------//
//------validateif const exists------//
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//Remove Mobile Menu//

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))