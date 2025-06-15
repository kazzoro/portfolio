// Game link configuration
const gameLinks = {
    'fallega': {
        trailer: 'https://www.youtube.com/watch?v=lvgBIiH9OPA&t=1s',
        itchio: 'https://azizali.itch.io/fallega'
    },
    'arcade-party': {
        trailer: 'https://www.youtube.com/watch?v=G0Td0IfhDzs'
    }
};

// Set game links dynamically
document.querySelectorAll('#games a[data-game]').forEach(link => {
    const game = link.getAttribute('data-game');
    const linkType = link.getAttribute('data-link');
    if (gameLinks[game] && gameLinks[game][linkType]) {
        link.setAttribute('href', gameLinks[game][linkType]);
    }
});

// Smooth scrolling for nav links and active page highlighting
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active section in nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// Simple hero text animation (mimics game title screen)
const heroTitle = document.querySelector('#home h1');
setInterval(() => {
    heroTitle.style.opacity = heroTitle.style.opacity === '0.7' ? '1' : '0.7';
}, 1000);