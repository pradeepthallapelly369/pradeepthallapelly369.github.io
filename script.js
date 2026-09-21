// ==========================================================================
// Particles.js Initialization
// ==========================================================================
if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 55,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "color": {
                "value": ["#00f2fe", "#4facfe", "#7c3aed"]
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.45,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8,
                    "opacity_min": 0.15,
                    "sync": false
                }
            },
            "size": {
                "value": 2.5,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 140,
                "color": "#00f2fe",
                "opacity": 0.18,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 3
                }
            }
        },
        "retina_detect": true
    });
}

// ==========================================================================
// Typewriter Effect
// ==========================================================================
const words = [
    "Enterprise Data Lakehouses",
    "Autonomous AI Agent Swarms",
    "OmniRoute High-Capacity AI Gateway",
    "Qlik Sense Analytics Platforms",
    "BharatAlpha Quantitative Systems",
    "dbt Core Medallion Pipelines"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter");

function typeEffect() {
    if (!typewriterEl) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 35 : 70;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2200; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; // Pause before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// ==========================================================================
// Project Filter Tabs
// ==========================================================================
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Active button styling
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        projectCards.forEach(card => {
            const categories = (card.getAttribute("data-category") || "").split(" ");
            
            if (filterValue === "all" || categories.includes(filterValue)) {
                card.classList.remove("hidden");
                card.style.opacity = "0";
                card.style.transform = "translateY(10px)";
                setTimeout(() => {
                    card.style.transition = "all 0.35s ease";
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

// ==========================================================================
// Mobile Navigation Toggle
// ==========================================================================
const mobileToggle = document.getElementById("mobile-toggle");
const navLinks = document.getElementById("nav-links");

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = mobileToggle.querySelector("i");
            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
            }
        });
    });
}

// ==========================================================================
// Active Navigation Link on Scroll
// ==========================================================================
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Navbar backdrop darkening
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (scrollY > 50) {
            navbar.style.background = "rgba(7, 9, 14, 0.92)";
            navbar.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.5)";
        } else {
            navbar.style.background = "rgba(7, 9, 14, 0.75)";
            navbar.style.boxShadow = "none";
        }
    }

    // Active link highlighting
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove("active");
                if (item.getAttribute("href") === "#" + sectionId) {
                    item.classList.add("active");
                }
            });
        }
    });
});

// ==========================================================================
// Smooth Scrolling for Anchor Links
// ==========================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
