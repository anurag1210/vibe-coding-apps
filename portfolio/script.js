// ==========================================
// INTERACTIVE ENHANCEMENTS
// ==========================================

// Smooth scroll behavior for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to background circles
window.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.circle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add cursor trail effect
const createCursorTrail = () => {
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    
    document.addEventListener('mousemove', (e) => {
        if (!isMoving) {
            isMoving = true;
            requestAnimationFrame(() => {
                const deltaX = Math.abs(e.clientX - lastX);
                const deltaY = Math.abs(e.clientY - lastY);
                
                if (deltaX > 5 || deltaY > 5) {
                    createTrailDot(e.clientX, e.clientY);
                }
                
                lastX = e.clientX;
                lastY = e.clientY;
                isMoving = false;
            });
        }
    });
};

const createTrailDot = (x, y) => {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #ff6b9d, #c084fc);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
        animation: trailFade 0.8s ease-out forwards;
    `;
    
    document.body.appendChild(dot);
    
    setTimeout(() => {
        dot.remove();
    }, 800);
};

// Add CSS animation for trail dots
const style = document.createElement('style');
style.textContent = `
    @keyframes trailFade {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize cursor trail
createCursorTrail();

// Add hover sound effect simulation (visual feedback)
const socialCards = document.querySelectorAll('.social-card');
socialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add a subtle pulse effect
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = '';
        }, 10);
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all social cards
document.querySelectorAll('.social-card').forEach(card => {
    observer.observe(card);
});

// Add dynamic gradient shift on scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll-position', window.scrollY);
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Trigger any scroll-end animations here
    }, 150);
});

// Performance optimization: Reduce animations on low-end devices
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.body.style.setProperty('--transition-fast', '0s');
    document.body.style.setProperty('--transition-normal', '0s');
    document.body.style.setProperty('--transition-slow', '0s');
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger confetti-like effect on load
    setTimeout(() => {
        createLoadEffect();
    }, 500);
});

const createLoadEffect = () => {
    const colors = ['#ff6b9d', '#c084fc', '#60a5fa', '#fbbf24'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * window.innerWidth;
        const endX = startX + (Math.random() - 0.5) * 200;
        const duration = 1 + Math.random() * 2;
        
        particle.style.cssText = `
            position: fixed;
            left: ${startX}px;
            top: -10px;
            width: 6px;
            height: 6px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: particleFall ${duration}s ease-out forwards;
            opacity: 0.8;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
};

// Add particle fall animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

console.log('🎌 Portfolio loaded successfully! 未来を創造する');
