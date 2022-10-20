const navButton = document.querySelector(".nav_button");
const navLinks = document.querySelector("nav");
let scrollContainer = document.querySelector(".container")
let blurBox = document.querySelector(".blur_box")
let menuOpen = false;

/* 
This event listener does: 
1. Creates and removes classes that enables navButton animations
2. Disables scrolling
3. Chanes position of navigation links box, which makes them visible or hides them
4. Changes css of blur_box that its is or is not visible behind opened mobile navigation
*/
navButton.addEventListener("click", () => {
    
    if (!menuOpen) {
        navButton.classList.add("open")
        menuOpen = true
        navLinks.style.transform = "translateY(60px)"
        blurBox.style.cssText = `
        opacity: 1;
        z-index: 100;
        `;
        disable()
    }
    else {
        navButton.classList.remove("open")
        menuOpen = false;
        navLinks.style.transform = "translateY(-100%)"
        blurBox.style.cssText = `
        opacity: 0;
        z-index: -100;
        `;
        enable()  
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
    document.querySelector('.container').addEventListener(    
        "keydown",
        (e) => {
          if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
              e.code
            )
          ) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        false
      );
}

function enable(){
    document.querySelector('.container').removeEventListener('wheel', preventScroll);
    document.querySelector('.container').removeEventListener('mousedown', preventScroll); // Update by me to prevent moushe middle click scrolling down
    document.querySelector('.container').removeEventListener('mouseup', preventScroll); // Update by me to prevent moushe middle click scrolling up
    document.querySelector('.container').removeEventListener('touchmove', preventScroll); // Update by me to prevent touch scrolling on mobile devices
    document.querySelector('.container').removeEventListener(    
        "keydown",
        (e) => {
          if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
              e.code
            )
          ) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        false
      );
}

// Onclick function to close mobile navigation, blur_box and enable scrolling
function menuClose() {
  navButton.classList.remove("open")
  menuOpen = false;
  navLinks.style.transform = "translateY(-100%)"
  blurBox.style.cssText = `
  opacity: 0;
  z-index: -100;
  `;
  enable()  
}


  // IMAGES
let imageHeightLimit = 200
let header = document.querySelector(".header")
let headerHeight = header.offsetHeight

// Hero section
if (document.documentElement.clientWidth < 1203) {
let heroTextArea = document.querySelector(".hero_section__text_area")
let heroTextAreaHeight = heroTextArea.offsetHeight

let heroImageArea = document.querySelector(".hero_section__image_area")
let heroMockup = document.querySelector(".hero_section__image_area__mockup")
let heroBadges = document.querySelector(".hero_section__image_area__badges_box")
let heroBadgesHeight = heroBadges.offsetHeight;

heroTextSpace = heroTextAreaHeight + headerHeight

heroImageArea.style.height = "calc(100% - " + heroTextSpace + "px)"
heroMockup.style.height = "calc(100% - " + heroBadgesHeight + "px)"

if (heroImageArea.offsetHeight < imageHeightLimit) {
  heroMockup.style.display = "none"
}
}
// Download section__page_01

let downloadImageArea = document.querySelector(".download_section__page_01__image_area")
let downloadMockup = document.querySelector(".download_section__page_01__image_area__mockup")
let downloadBadges = document.querySelector(".download_section__page_01__image_area__badges_box")
let downloadBadgesHeight = downloadBadges.offsetHeight;

downloadMockup.style.height = "calc(100% - " + downloadBadgesHeight + "px)"
downloadMockup.style.maxHeight = "220px"

if (downloadImageArea.offsetHeight < imageHeightLimit) {
  downloadMockup.style.display = "none"
}

// dochazka_section__page_01

let dochazkaSectionTitle_page01 = document.querySelector(".dochazka_section__page_01 .section_title")
let dochazkaSectionTitleHeight_page01 = dochazkaSectionTitle_page01.offsetHeight
let dochazkaTextArea_page01 = document.querySelector(".dochazka_section__page_01__flexbox__text_area")
let dochazkaTextAreaHeight_page01 = dochazkaTextArea_page01.offsetHeight
let dochazkaMockup_page01 = document.querySelector(".dochazka_section__page_01__flexbox__mockup")

let dochazkaTextSpace_page01 = dochazkaSectionTitleHeight_page01 + dochazkaTextAreaHeight_page01
dochazkaMockup_page01.style.height = "calc(100% - " + dochazkaTextSpace_page01 + "px)"

if (dochazkaMockup_page01.offsetHeight < imageHeightLimit) {
  dochazkaMockup_page01.style.display = "none"
}

// dochazka_section__page_02

let dochazkaTextArea_page02 = document.querySelector(".dochazka_section__page_02__flexbox__text_area")
let dochazkaTextAreaHeight_page02 = dochazkaTextArea_page02.offsetHeight
let dochazkaMockup_page02 = document.querySelector(".dochazka_section__page_02__flexbox__mockup")

let dochazkaTextSpace_page02 = dochazkaTextAreaHeight_page02
dochazkaMockup_page02.style.height = "calc(100% - " + dochazkaTextSpace_page02 + "px)"

if (dochazkaMockup_page02.offsetHeight < imageHeightLimit) {
  dochazkaMockup_page02.style.display = "none"
}

// HR_section__page_01

let HrSectionTitle_page01 = document.querySelector(".HR_section__page_01 .section_title")
let HrSectionTitleHeight_page01 = HrSectionTitle_page01.offsetHeight
let HrTextArea_page01 = document.querySelector(".HR_section__page_01__flexbox__text_area")
let HrTextAreaHeight_page01 = HrTextArea_page01.offsetHeight
let HrMockup_page01 = document.querySelector(".HR_section__page_01__flexbox__mockup")

let HrTextSpace_page01 = HrSectionTitleHeight_page01 + HrTextAreaHeight_page01
HrMockup_page01.style.height = "calc(100% - " + HrTextSpace_page01 + "px)"

if (HrMockup_page01.offsetHeight < imageHeightLimit) {
  HrMockup_page01.style.display = "none"
}

// HR_section__page_02

let HrTextArea_page02 = document.querySelector(".HR_section__page_02__flexbox__text_area")
let HrTextAreaHeight_page02 = HrTextArea_page02.offsetHeight
let HrMockup_page02 = document.querySelector(".HR_section__page_02__flexbox__mockup")

let HrTextSpace_page02 = HrTextAreaHeight_page02
HrMockup_page02.style.height = "calc(100% - " + HrTextSpace_page02 + "px)"

if (HrMockup_page02.offsetHeight < imageHeightLimit) {
  HrMockup_page02.style.display = "none"
}

// Rezervace_section__page_01

let RezervaceSectionTitle_page01 = document.querySelector(".Rezervace_section__page_01 .section_title")
let RezervaceSectionTitleHeight_page01 = RezervaceSectionTitle_page01.offsetHeight
let RezervaceTextArea_page01 = document.querySelector(".Rezervace_section__page_01__flexbox__text_area")
let RezervaceTextAreaHeight_page01 = RezervaceTextArea_page01.offsetHeight
let RezervaceMockup_page01 = document.querySelector(".Rezervace_section__page_01__flexbox__mockup")

let RezervaceTextSpace_page01 = RezervaceSectionTitleHeight_page01 + RezervaceTextAreaHeight_page01
RezervaceMockup_page01.style.height = "calc(100% - " + RezervaceTextSpace_page01 + "px)"

if (RezervaceMockup_page01.offsetHeight < imageHeightLimit) {
  RezervaceMockup_page01.style.display = "none"
}

// Rezervace_section__page_02

let RezervaceTextArea_page02 = document.querySelector(".Rezervace_section__page_02__flexbox__text_area")
let RezervaceTextAreaHeight_page02 = RezervaceTextArea_page02.offsetHeight
let RezervaceMockup_page02 = document.querySelector(".Rezervace_section__page_02__flexbox__mockup")

let RezervaceTextSpace_page02 = RezervaceTextAreaHeight_page02
RezervaceMockup_page02.style.height = "calc(100% - " + RezervaceTextSpace_page02 + "px)"

if (RezervaceMockup_page02.offsetHeight < imageHeightLimit) {
  RezervaceMockup_page02.style.display = "none"
}

// Operacni_section__page_01

let operacniSectionTitle_page01 = document.querySelector(".Operacni_section__page_01 .section_title")
let operacniSectionTitleHeight_page01 = operacniSectionTitle_page01.offsetHeight
let operacniTextArea_page01 = document.querySelector(".Operacni_section__page_01__flexbox__text_area")
let operacniTextAreaHeight_page01 = operacniTextArea_page01.offsetHeight
let operacniMockup_page01 = document.querySelector(".Operacni_section__page_01__flexbox__mockup")

let operacniTextSpace_page01 = operacniSectionTitleHeight_page01 + operacniTextAreaHeight_page01
operacniMockup_page01.style.height = "calc(100% - " + operacniTextSpace_page01 + "px)"

if (operacniMockup_page01.offsetHeight < imageHeightLimit) {
  operacniMockup_page01.style.display = "none"
}

// Operacni_section__page_02

let operacniTextArea_page02 = document.querySelector(".Operacni_section__page_02__flexbox__text_area")
let operacniTextAreaHeight_page02 = operacniTextArea_page02.offsetHeight
let operacniMockup_page02 = document.querySelector(".Operacni_section__page_02__flexbox__mockup")

let operacniTextSpace_page02 = operacniTextAreaHeight_page02
operacniMockup_page02.style.height = "calc(100% - " + operacniTextSpace_page02 + "px)"

if (operacniMockup_page02.offsetHeight < imageHeightLimit) {
  operacniMockup_page02.style.display = "none"
}

// Operacni_section__page_03

let operacniTextArea_page03 = document.querySelector(".Operacni_section__page_03__flexbox__text_area")
let operacniTextAreaHeight_page03 = operacniTextArea_page03.offsetHeight
let operacniMockup_page03 = document.querySelector(".Operacni_section__page_03__flexbox__mockup")

let operacniTextSpace_page03 = operacniTextAreaHeight_page03
operacniMockup_page03.style.height = "calc(100% - " + operacniTextSpace_page03 + "px)"

if (operacniMockup_page03.offsetHeight < imageHeightLimit) {
  operacniMockup_page03.style.display = "none"
}

// Marketing_section__page_01

let marketingSectionTitle_page01 = document.querySelector(".Marketing_section__page_01 .section_title")
let marketingSectionTitleHeight_page01 = marketingSectionTitle_page01.offsetHeight
let marketingTextArea_page01 = document.querySelector(".Marketing_section__page_01__flexbox__text_area")
let marketingTextAreaHeight_page01 = marketingTextArea_page01.offsetHeight
let marketingMockup_page01 = document.querySelector(".Marketing_section__page_01__flexbox__mockup")

let marketingTextSpace_page01 = marketingSectionTitleHeight_page01 + marketingTextAreaHeight_page01
marketingMockup_page01.style.height = "calc(100% - " + marketingTextSpace_page01 + "px)"

if (marketingMockup_page01.offsetHeight < imageHeightLimit) {
  marketingMockup_page01.style.display = "none"
}