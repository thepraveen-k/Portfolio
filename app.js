document.addEventListener('DOMContentLoaded', function () {

    let menuIcon = document.querySelector("#menu-icon");
    let closeIcon = document.querySelector("#close-icon");
    let navbar = document.querySelector(".navbar");

    // Toggle navbar when menu icon is clicked
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    }

    // Toggle navbar when close icon is clicked
    closeIcon.onclick = () => {
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    }

    // Handle click on navigation links
    document.querySelectorAll('.navbar a').forEach(navLink => {
        navLink.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
                navbar.classList.remove("active");
            }
        });
    });

    // Close navbar if clicked outside the navbar
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
            navbar.classList.remove("active");
        }
    });

    let sections = document.querySelectorAll("section");
    let navlinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navlinks.forEach(link => {
                    link.classList.remove("active");
                });
                document.querySelector("header nav a[href='#" + id + "']").classList.add("active");
            }
        });

        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        navbar.classList.remove("active");
    };

    ScrollReveal({
        distance: "80px",
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container,.portfolio-box, .contact form', { origin: 'button' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


    const typed = new Typed('.multiple-text', {
        strings: ['Software Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

});

