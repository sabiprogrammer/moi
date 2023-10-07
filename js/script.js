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



// ********** bubble effect ************
function createBubble() {
    const section = document.querySelector('.bubble-effect');
    const createElement = document.createElement('label');

    let size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000);
}

setInterval(createBubble, 50);

function createBubble2() {
    const section = document.querySelector('.bubble-effect2');
    const createElement = document.createElement('label');

    let size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000);
}

setInterval(createBubble2, 50);

function createBubble3() {
    const section = document.querySelector('.bubble-effect3');
    const createElement = document.createElement('label');

    let size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000);
}

setInterval(createBubble3, 50);

function createBubble4() {
    const section = document.querySelector('.bubble-effect4');
    const createElement = document.createElement('label');

    let size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000);
}

setInterval(createBubble4, 50);

function createBubble5() {
    const section = document.querySelector('.bubble-effect5');
    const createElement = document.createElement('label');

    let size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000);
}

setInterval(createBubble5, 50);

function createBubble6() {
    const section = document.querySelector('.bubble-effect6');
    const createElement = document.createElement('label');

    let size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000);
}

setInterval(createBubble6, 50);

function createBubble7() {
    const section = document.querySelector('.bubble-effect7');
    const createElement = document.createElement('label');

    let size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000);
}

setInterval(createBubble7, 50);