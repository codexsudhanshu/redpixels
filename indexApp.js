
window.addEventListener('load', function(){
    this.setTimeout(function(){
        alert("This site is under development, so judge na kre...")
    }, 2000)
    console.log("window is loaded")
})

const toggleButton = document.querySelector(".burger");
toggleButton.addEventListener("click", burgerButton);

function burgerButton() {
    const nav = document.querySelector(".links");
    const socialLinks = document.querySelector(".social-links");
    nav.classList.toggle("new-links");
    socialLinks.classList.toggle("new-social-links");

    const actLinks = document.querySelectorAll(".active-links");
    linkSlide(actLinks);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function linkSlide(navLinks) {
    let activeLinks = navLinks;
    let demoClass = document.querySelector(".active-links").className;
    if (demoClass === "active-links") {
        for (let i = 0; i < activeLinks.length; i++) {
            let indiName = activeLinks[i];
            indiName.classList.toggle("new-active-links");
            await sleep(50);
        }
    } else {
        for (let i = 0; i < activeLinks.length; i++) {
            let indiName = activeLinks[i];
            indiName.classList.toggle("new-active-links");
            await sleep(0);
        }
    }
}

const navBar = document.querySelector(".navigation-bar");
function navShadow() {
    const box = document.querySelector(".main-banner");
    let boxSize = box.getBoundingClientRect().top;
    if (boxSize < -20) {
        navBar.className = "new-navigation-bar";
    } else {
        navBar.className = "navigation-bar";
    }
}

window.addEventListener("scroll", navShadow);


