// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// making the nav collape on small screen
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const loginContainer = document.querySelector('.login-container');
const mainLoginContainer = document.querySelector('.main-login-container');

// setting the year
const yearElement = document.querySelector('footer .year');


navToggle.addEventListener('click', () => {
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    // const loginContainerHeight = loginContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
        // mainLoginContainer.style.height = `${loginContainerHeight + 20}px`;
    } else {
        linksContainer.style.height = 0;
        // mainLoginContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
window.addEventListener("scroll", function () {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    // setup back to top link
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});


// ********** setting the year ************
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
