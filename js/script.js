const navButton = document.querySelector(".nav_button");
const navLinks = document.querySelector("nav");
const scrollContainer = document.querySelector(".container")
let menuOpen = false;

// This event listener does: 
// 1. Creates and removes classes that enables navButton animations
// 2. Disables scrolling
// 3. Chanes position of navigation links box, which makes them visible or hides them
navButton.addEventListener("click", () => {
    
    if (!menuOpen) {
        navButton.classList.add("open");
        menuOpen = true;
        navLinks.style.transform = "translateY(60px)";
        disable()
    }
    else {
        enable()
        navButton.classList.remove("open");
        menuOpen = false;
        navLinks.style.transform = "translateY(-100%)";
    }
})

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

function disable(){
    document.querySelector('.container').addEventListener('wheel', preventScroll, {passive: false});
    document.querySelector('.container').addEventListener('mousedown', preventScroll, {passive: false}); // Update by me to prevent moushe middle click scrolling down
    document.querySelector('.container').addEventListener('mouseup', preventScroll, {passive: false}); // Update by me to prevent moushe middle click scrolling up
    document.querySelector('.container').addEventListener('touchmove', preventScroll, {passive: false}); // Update by me to prevent touch scrolling on mobile devices
}

function enable(){
    document.querySelector('.container').removeEventListener('wheel', preventScroll);
    document.querySelector('.container').removeEventListener('mousedown', preventScroll); // Update by me to prevent moushe middle click scrolling down
    document.querySelector('.container').removeEventListener('mouseup', preventScroll); // Update by me to prevent moushe middle click scrolling up
    document.querySelector('.container').removeEventListener('touchmove', preventScroll); // Update by me to prevent touch scrolling on mobile devices
}

    
