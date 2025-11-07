const navLinks = document.querySelectorAll("header nav a");
const sectionPlaceholders = document.querySelectorAll(".section-placeholder");

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

// Set initial icon based on theme
if (currentTheme === 'light') {
    themeIcon.className = 'fas fa-sun';
} else {
    themeIcon.className = 'fas fa-moon';
}

// Toggle theme function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update icon
    if (newTheme === 'light') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Add event listener to theme toggle button
themeToggle.addEventListener('click', toggleTheme);

function loadSection(id) {
    const placeholder = document.getElementById(id);
    if (!placeholder) return;

    // Clear existing content
    placeholder.innerHTML = '';

    // Load content from file
    fetch(`sections/${id}.html`)
        .then(response => response.text())
        .then(html => {
            placeholder.innerHTML = html;
            // Add active class to the loaded section
            const section = placeholder.querySelector('section');
            if (section) {
                section.classList.add('active-section');
                // Scroll to the top of the loaded section, accounting for fixed navbar
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar.offsetHeight;
                const offsetTop = section.offsetTop - navbarHeight - 20; // 20px padding
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        })
        .catch(error => {
            console.error(`Error loading section ${id}:`, error);
            placeholder.innerHTML = `<section id="${id}" class="active-section"><div class="section-header"><h2>Error</h2></div><p>Failed to load content.</p></section>`;
        });
}

function showSection(id) {
    // Hide all sections
    sectionPlaceholders.forEach(placeholder => {
        const section = placeholder.querySelector('section');
        if (section) {
            section.classList.remove("active-section");
        }
    });

    // Load and show the target section
    loadSection(id);
}

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        showSection(targetId);
        window.history.pushState(null, "", "#" + targetId);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1) || "about";
    const activeLink = document.querySelector(`header nav a[href="#${hash}"]`);
    if (activeLink) activeLink.classList.add("active");
    showSection(hash);
});

window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1);
    showSection(hash);
    navLinks.forEach(l => l.classList.remove("active"));
    const current = document.querySelector(`header nav a[href="#${hash}"]`);
    if (current) current.classList.add("active");
});