
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .right ul li");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) { 
            current = section.getAttribute("data-section");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("active");
        if (li.getAttribute("data-target") === current) {
            li.classList.add("active");
        }
    });
});







    document.addEventListener('DOMContentLoaded', () => {
        const instagramIcon = document.querySelector('.fa-instagram');
        const linkedinIcon = document.querySelector('.fa-linkedin');
        const githubIcon = document.querySelector('.fa-github');

        if (instagramIcon) {
            instagramIcon.addEventListener('click', () => {
                window.open("https://www.instagram.com/anuj_got_that1/", '_blank');
            });
        }

        if (linkedinIcon) {
            linkedinIcon.addEventListener('click', () => {
                window.open('https://www.linkedin.com/in/anuj-purohit-588924316/', '_blank');
            });
        }

        if (githubIcon) {
            githubIcon.addEventListener('click', () => {
                window.open('https://github.com/Anuj-165', '_blank');
            });
        }
    });


