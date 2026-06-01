document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS Library for Scroll Animations
    AOS.init({
        duration: 800, // Animation duration in ms
        once: true,    // Whether animation should happen only once - while scrolling down
        offset: 100,   // Offset (in px) from the original trigger point
        easing: 'ease-in-out',
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--glass-shadow)';
            navbar.style.background = 'var(--glass-bg)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Accordion Logic for FAQ
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Optional: Close other open accordions
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== this && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                }
            });
        });
    });

});

// Quiz Logic
const clubRecommendations = {
    'tech': {
        title: 'ReLU & Prachurya 💻',
        desc: 'You love solving problems and building things. Join ReLU to master DSA & AI, or Prachurya to win hackathons!'
    },
    'culture': {
        title: 'Saptaswara & Nritya Sparsh 🎭',
        desc: 'You are meant for the stage! Showcase your musical talent in Saptaswara or your dance moves in Nritya Sparsh.'
    },
    'sports': {
        title: 'Amrita Sports Council 🏆',
        desc: 'Keep the energy high! Join the sports council and represent the campus in inter-college tournaments.'
    },
    'manage': {
        title: 'Event Management Committee 📋',
        desc: 'You are a natural leader. Help organize the biggest fests and events on campus.'
    }
};

function answerQuiz(answer) {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const resultEl = document.getElementById('quiz-result');
    const titleEl = document.getElementById('result-title');
    const descEl = document.getElementById('result-desc');

    // Hide options, show result
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    
    const result = clubRecommendations[answer];
    titleEl.textContent = result.title;
    descEl.textContent = result.desc;
    
    resultEl.classList.remove('hidden');
}

function resetQuiz() {
    document.getElementById('quiz-question').style.display = 'block';
    document.getElementById('quiz-options').style.display = 'grid';
    document.getElementById('quiz-result').classList.add('hidden');
}

// See All Campuses Toggle Logic
const seeAllBtn = document.getElementById('see-all-campuses-btn');
const otherCampusesDiv = document.getElementById('other-campuses');

if (seeAllBtn && otherCampusesDiv) {
    seeAllBtn.addEventListener('click', () => {
        if (otherCampusesDiv.style.display === 'none') {
            otherCampusesDiv.style.display = 'block';
            seeAllBtn.innerHTML = 'Show Less <span>👆</span>';
            // Refresh AOS so the newly visible elements get their animations
            setTimeout(() => {
                AOS.refreshHard();
            }, 100);
        } else {
            otherCampusesDiv.style.display = 'none';
            seeAllBtn.innerHTML = 'See All Campuses <span>👇</span>';
        }
    });
}
