var instaIcon = document.getElementById("instaIcon");
if (instaIcon) {
    instaIcon.addEventListener("click", function () {
        window.open("https://www.instagram.com/elguapocholo/");
    });
}

var linkedIN = document.getElementById("linkedIN");
if (linkedIN) {
    linkedIN.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/gurungsj/");
    });
}

var homeText = document.getElementById("homeText");
if (homeText) {
    homeText.addEventListener("click", function () {
        window.refresh;
    });
}

var aboutText = document.getElementById("aboutText");
if (aboutText) {
    aboutText.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='aboutContainer']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    });
}

var skillsText = document.getElementById("skillsText");
if (skillsText) {
    skillsText.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='developerSkills']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    });
}

var projectsText = document.getElementById("projectsText");
if (projectsText) {
    projectsText.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='projects']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    });
}

var contactText = document.getElementById("contactText");
if (contactText) {
    contactText.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='footer']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    });
}