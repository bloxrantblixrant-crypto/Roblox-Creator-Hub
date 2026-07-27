// Hide loading screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 800);
});

// Mobile menu
const menuButton = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade in sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .announcement").forEach(section => {
    observer.observe(section);
});

// Simple toast notification
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

// Welcome toast
window.addEventListener("load", () => {
    setTimeout(() => {
        showToast("Welcome to Roblox Creator Hub!");
    }, 1200);
});