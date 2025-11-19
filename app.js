/**
 * PHIRE'S PRIME PROPERTIES - Main JavaScript File
 * Handles all interactive features and animations
 */

// ========================================
// PRELOADER
// ========================================
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// ========================================
// MOBILE NAVIGATION
// ========================================
const hamburger = document.querySelector('.hamburger');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

function openMobileMenu() {
    hamburger.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    if (hamburger.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ========================================
// STICKY HEADER
// ========================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// HERO CAROUSEL
// ========================================
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-carousel-dot');
let heroInterval;

function showHeroSlide(index) {
    if (!heroSlides.length) return;
    
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroDots.forEach(dot => dot.classList.remove('active'));
    
    if (index >= heroSlides.length) {
        currentHeroSlide = 0;
    } else if (index < 0) {
        currentHeroSlide = heroSlides.length - 1;
    } else {
        currentHeroSlide = index;
    }
    
    if (heroSlides[currentHeroSlide]) {
        heroSlides[currentHeroSlide].classList.add('active');
    }
    if (heroDots[currentHeroSlide]) {
        heroDots[currentHeroSlide].classList.add('active');
    }
}

function nextHeroSlide() {
    showHeroSlide(currentHeroSlide + 1);
}

function prevHeroSlide() {
    showHeroSlide(currentHeroSlide - 1);
}

function startHeroCarousel() {
    heroInterval = setInterval(nextHeroSlide, 5000);
}

function stopHeroCarousel() {
    clearInterval(heroInterval);
}

// Initialize hero carousel
if (heroSlides.length > 0) {
    showHeroSlide(0);
    startHeroCarousel();
    
    // Pause on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopHeroCarousel);
        heroSection.addEventListener('mouseleave', startHeroCarousel);
    }
    
    // Manual controls
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showHeroSlide(index);
            stopHeroCarousel();
            startHeroCarousel();
        });
    });
    
    // Arrow controls
    const prevArrow = document.querySelector('.hero-carousel-arrow.prev');
    const nextArrow = document.querySelector('.hero-carousel-arrow.next');
    
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            prevHeroSlide();
            stopHeroCarousel();
            startHeroCarousel();
        });
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            nextHeroSlide();
            stopHeroCarousel();
            startHeroCarousel();
        });
    }
}

// ========================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .slide-up, .zoom-in');
animatedElements.forEach(el => observer.observe(el));

// ========================================
// STATS COUNTER ANIMATION
// ========================================
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const targetText = statNumber.textContent;
                const targetNumber = parseInt(targetText.replace(/\D/g, ''));
                const suffix = targetText.replace(/[0-9,]/g, '');
                
                let currentNumber = 0;
                const duration = 2000; // 2 seconds
                const increment = targetNumber / (duration / 16); // 60fps
                
                const updateCounter = () => {
                    currentNumber += increment;
                    if (currentNumber < targetNumber) {
                        statNumber.textContent = Math.floor(currentNumber).toLocaleString() + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        statNumber.textContent = targetNumber.toLocaleString() + suffix;
                    }
                };
                
                updateCounter();
            }
        }
    });
}, { threshold: 0.5 });

// Observe all stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => statsObserver.observe(card));

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================
let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.carousel-dot');
let testimonialInterval;

function showTestimonial(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    
    if (index >= testimonialSlides.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonialSlides.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    if (testimonialSlides[currentTestimonial]) {
        testimonialSlides[currentTestimonial].classList.add('active');
    }
    if (testimonialDots[currentTestimonial]) {
        testimonialDots[currentTestimonial].classList.add('active');
    }
}

function nextTestimonial() {
    showTestimonial(currentTestimonial + 1);
    resetTestimonialInterval();
}

function prevTestimonial() {
    showTestimonial(currentTestimonial - 1);
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    showTestimonial(index);
    resetTestimonialInterval();
}

function startTestimonialAutoplay() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialAutoplay();
}

// Start autoplay if testimonials exist
if (testimonialSlides.length > 0) {
    startTestimonialAutoplay();
}

// Touch/Swipe support for testimonials
let testimonialTouchStart = 0;
let testimonialTouchEnd = 0;

const testimonialCarousel = document.querySelector('.testimonials-carousel');
if (testimonialCarousel) {
    testimonialCarousel.addEventListener('touchstart', (e) => {
        testimonialTouchStart = e.changedTouches[0].screenX;
    });

    testimonialCarousel.addEventListener('touchend', (e) => {
        testimonialTouchEnd = e.changedTouches[0].screenX;
        handleTestimonialSwipe();
    });
}

function handleTestimonialSwipe() {
    if (testimonialTouchStart - testimonialTouchEnd > 50) {
        nextTestimonial();
    }
    if (testimonialTouchEnd - testimonialTouchStart > 50) {
        prevTestimonial();
    }
}

// ========================================
// CONTACT FORM VALIDATION
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset errors
        document.querySelectorAll('.form-error').forEach(error => {
            error.classList.remove('visible');
        });
        
        let isValid = true;
        
        // Validate name
        if (name.length < 2) {
            document.getElementById('nameError').classList.add('visible');
            isValid = false;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').classList.add('visible');
            isValid = false;
        }
        
        // Validate phone (basic Nigerian phone number validation)
        const phonePattern = /^[\d\s+()-]{10,}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneError').classList.add('visible');
            isValid = false;
        }
        
        // Validate message
        if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
            document.getElementById('messageError').classList.add('visible');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            document.getElementById('formSuccess').classList.add('visible');
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('formSuccess').classList.remove('visible');
            }, 5000);
        }
    });
}

// ========================================
// PROJECT DETAIL MODAL
// ========================================
const projectModal = document.getElementById('projectModal');
const projectModalContent = document.getElementById('projectModalContent');

// Project data (in a real app, this would come from a database)
const projectsData = {
    'lagoon-park': {
        name: 'Lagoon Park Estate',
        location: 'Lekki, Lagos',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
        plotSizes: '300SQM, 500SQM, 600SQM',
        price: 'From ₦5.5M',
        title: 'Certificate of Occupancy (C of O)',
        description: 'Lagoon Park Estate is a premium gated community located in the heart of Lekki. With excellent infrastructure, 24/7 security, and close proximity to major landmarks, this estate offers the perfect blend of luxury and convenience.',
        features: [
            'Fully paved roads',
            '24/7 security',
            'Electricity & water supply',
            'Drainage system',
            'Perimeter fencing',
            'Recreational facilities'
        ],
        landmarks: [
            'Lekki Conservation Centre - 5 mins',
            'Elegushi Beach - 10 mins',
            'Lekki-Epe Expressway - 2 mins',
            'Shopping malls - 8 mins'
        ]
    },
    'garden-city': {
        name: 'Garden City Heights',
        location: 'Ibadan, Oyo',
        image: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800&q=80',
        plotSizes: '500SQM, 750SQM, 1000SQM',
        price: 'From ₦3.2M',
        title: 'Gazette',
        description: 'Garden City Heights offers affordable land ownership in a rapidly developing area of Ibadan. Perfect for those looking to invest in property outside Lagos with excellent ROI potential.',
        features: [
            'Well-planned layout',
            'Good road network',
            'Proximity to major roads',
            'Secure environment',
            'Fast appreciation potential',
            'Affordable payment plans'
        ],
        landmarks: [
            'Ibadan Airport - 15 mins',
            'UI Campus - 20 mins',
            'Major expressway - 5 mins',
            'Shopping centers - 10 mins'
        ]
    },
    'ivory-gates': {
        name: 'Ivory Gates',
        location: 'Ibeju-Lekki, Lagos',
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
        plotSizes: '450SQM, 600SQM, 800SQM',
        price: 'From ₦4.8M',
        title: 'Certificate of Occupancy (C of O)',
        description: 'Strategically positioned in the fast-growing Ibeju-Lekki corridor, Ivory Gates is your gateway to future prosperity. This area is experiencing massive development with the Lekki Free Trade Zone nearby.',
        features: [
            'Premium infrastructure',
            'Controlled access',
            'Modern amenities',
            'Strategic location',
            'High ROI potential',
            'Flexible payment options'
        ],
        landmarks: [
            'Lekki Free Trade Zone - 10 mins',
            'Dangote Refinery - 15 mins',
            'Proposed Airport - 20 mins',
            'Beach resorts - 12 mins'
        ]
    },
    'green-valley': {
        name: 'Green Valley Estate',
        location: 'Epe, Lagos',
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
        plotSizes: '600SQM, 900SQM, 1200SQM',
        price: 'From ₦2.9M',
        title: 'Excision in Progress',
        description: 'Green Valley Estate offers spacious plots at competitive prices in the serene environment of Epe. Ideal for those seeking a peaceful location with investment potential.',
        features: [
            'Large plot sizes',
            'Serene environment',
            'Good accessibility',
            'Affordable pricing',
            'Community development',
            'Payment flexibility'
        ],
        landmarks: [
            'Epe Town Center - 8 mins',
            'Lekki-Epe Expressway - 3 mins',
            'Universities nearby - 15 mins',
            'Markets - 5 mins'
        ]
    },
    'royal-palm': {
        name: 'Royal Palm Residences',
        location: 'Ajah, Lagos',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
        plotSizes: '350SQM, 500SQM, 700SQM',
        price: 'From ₦6.2M',
        title: 'Certificate of Occupancy (C of O)',
        description: 'Royal Palm Residences brings luxury living to Ajah. With world-class infrastructure and premium amenities, this estate is designed for discerning investors.',
        features: [
            'World-class infrastructure',
            'Premium security',
            'Underground utilities',
            'Landscaped gardens',
            'Sports facilities',
            'Clubhouse'
        ],
        landmarks: [
            'Eko Atlantic - 25 mins',
            'VI/Lekki - 20 mins',
            'Abraham Adesanya Estate - 5 mins',
            'Shopping complexes - 7 mins'
        ]
    },
    'meridian-heights': {
        name: 'Meridian Heights',
        location: 'Ibadan, Oyo',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        plotSizes: '500SQM, 700SQM, 900SQM',
        price: 'From ₦3.5M',
        title: 'Certificate of Occupancy (C of O)',
        description: 'Meridian Heights offers a perfect blend of affordability and quality in Ibadan. Ideal for families and investors looking for stable returns.',
        features: [
            'Family-friendly environment',
            'Good schools nearby',
            'Healthcare facilities',
            'Market accessibility',
            'Stable appreciation',
            'Community amenities'
        ],
        landmarks: [
            'Ring Road - 8 mins',
            'Polytechnic Ibadan - 12 mins',
            'Major markets - 10 mins',
            'Hospitals - 7 mins'
        ]
    },
    'crystal-bay': {
        name: 'Crystal Bay',
        location: 'Sangotedo, Lagos',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        plotSizes: '400SQM, 550SQM, 750SQM',
        price: 'From ₦5.0M',
        title: "Governor's Consent",
        description: 'Crystal Bay is strategically located in Sangotedo with excellent access to major roads and commercial areas. Perfect for residential and commercial development.',
        features: [
            'Mixed-use potential',
            'Excellent accessibility',
            'Developed neighborhood',
            'Commercial viability',
            'Modern planning',
            'Investment grade'
        ],
        landmarks: [
            'Novare Mall - 10 mins',
            'Ajah - 15 mins',
            'Lekki-Epe Expressway - 5 mins',
            'Schools - 8 mins'
        ]
    },
    'emerald-springs': {
        name: 'Emerald Springs',
        location: 'Mowe, Ogun',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
        plotSizes: '300SQM, 450SQM, 650SQM',
        price: 'From ₦2.5M',
        title: 'Excision in Progress',
        description: 'Emerald Springs offers the most affordable land ownership opportunity without compromising on quality. Located in the fast-developing Mowe area with great investment potential.',
        features: [
            'Most affordable option',
            'Growing area',
            'Easy commute to Lagos',
            'Good road network',
            'Community focused',
            'Fast development'
        ],
        landmarks: [
            'Lagos-Ibadan Expressway - 5 mins',
            'Redemption Camp - 10 mins',
            'Markets - 7 mins',
            'Schools - 8 mins'
        ]
    }
};

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    projectModalContent.innerHTML = `
        <img src="${project.image}" alt="${project.name}" style="width: 100%; border-radius: var(--radius-lg); margin-bottom: 2rem;">
        <h2 class="modal-title">${project.name}</h2>
        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="ri-map-pin-line" style="color: var(--primary-red);"></i>
                <span>${project.location}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="ri-layout-grid-line" style="color: var(--primary-red);"></i>
                <span>${project.plotSizes}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="ri-file-list-3-line" style="color: var(--primary-red);"></i>
                <span>${project.title}</span>
            </div>
        </div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--primary-red); margin-bottom: 2rem;">${project.price}</div>
        <p style="line-height: 1.8; margin-bottom: 2rem;">${project.description}</p>
        
        <h3 style="color: var(--primary-green); margin-bottom: 1rem;">Key Features</h3>
        <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
            ${project.features.map(feature => `
                <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <i class="ri-checkbox-circle-fill" style="color: var(--primary-green);"></i>
                    <span>${feature}</span>
                </li>
            `).join('')}
        </ul>
        
        <h3 style="color: var(--primary-green); margin-bottom: 1rem;">Nearby Landmarks</h3>
        <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
            ${project.landmarks.map(landmark => `
                <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <i class="ri-map-pin-2-fill" style="color: var(--accent-gold);"></i>
                    <span>${landmark}</span>
                </li>
            `).join('')}
        </ul>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="openReserveModal('${project.name}', '${project.plotSizes.split(',')[0].trim()}', '${project.price}')">
                <i class="ri-bookmark-line"></i> Book Site Inspection
            </button>
            <a href="https://wa.me/message/GDBYKY4TBZ4ND1" target="_blank" class="btn btn-secondary">
                <i class="ri-whatsapp-line"></i> Chat on WhatsApp
            </a>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
if (projectModal) {
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeReserveModal();
        closeLightbox();
    }
});

// ========================================
// RESERVE OFFER MODAL
// ========================================
const reserveModal = document.getElementById('reserveModal');
const reserveForm = document.getElementById('reserveForm');

function openReserveModal(estateName, plotSize, price) {
    document.getElementById('reserveEstate').value = estateName;
    document.getElementById('reservePlotSize').value = plotSize;
    document.getElementById('reservePrice').value = price;
    
    reserveModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Close project modal if it's open
    closeProjectModal();
}

function closeReserveModal() {
    reserveModal.classList.remove('active');
    document.body.style.overflow = '';
    reserveForm.reset();
    document.getElementById('reserveSuccess').classList.remove('visible');
}

// Reserve form submission
if (reserveForm) {
    reserveForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        document.getElementById('reserveSuccess').classList.add('visible');
        
        // Reset form after delay
        setTimeout(() => {
            closeReserveModal();
        }, 3000);
    });
}

// Close reserve modal on overlay click
if (reserveModal) {
    reserveModal.addEventListener('click', function(e) {
        if (e.target === reserveModal) {
            closeReserveModal();
        }
    });
}

// ========================================
// LIGHTBOX FOR GALLERY
// ========================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
let currentLightboxIndex = 0;

const galleryImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&q=80',
    'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80'
];

function openLightbox(index) {
    currentLightboxIndex = index;
    lightboxImage.src = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentLightboxIndex];
}

function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentLightboxIndex];
}

// Close lightbox on overlay click
if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            nextLightboxImage();
        } else if (e.key === 'ArrowLeft') {
            prevLightboxImage();
        }
    }
});

// ========================================
// FAQ ACCORDION (for contact page)
// ========================================
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordion = this.parentElement;
            const content = accordion.querySelector('.accordion-content');
            const isActive = this.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.parentElement.querySelector('.accordion-content').classList.remove('active');
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
}

// Initialize accordions when DOM is ready
document.addEventListener('DOMContentLoaded', initAccordions);

// ========================================
// FILTERS (for projects page)
// ========================================
function initFilters() {
    const locationFilter = document.getElementById('locationFilter');
    const priceFilter = document.getElementById('priceFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    if (locationFilter && priceFilter && statusFilter) {
        locationFilter.addEventListener('change', applyFilters);
        priceFilter.addEventListener('change', applyFilters);
        statusFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const location = document.getElementById('locationFilter').value;
    const price = document.getElementById('priceFilter').value;
    const status = document.getElementById('statusFilter').value;
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        let showCard = true;
        
        // Apply location filter
        if (location !== 'all') {
            const cardLocation = card.dataset.location;
            if (cardLocation !== location) {
                showCard = false;
            }
        }
        
        // Apply price filter
        if (price !== 'all') {
            const cardPrice = parseFloat(card.dataset.price);
            const [min, max] = price.split('-').map(p => parseFloat(p));
            
            if (max) {
                if (cardPrice < min || cardPrice > max) {
                    showCard = false;
                }
            } else {
                if (cardPrice < min) {
                    showCard = false;
                }
            }
        }
        
        // Apply status filter
        if (status !== 'all') {
            const cardStatus = card.dataset.status;
            if (cardStatus !== status) {
                showCard = false;
            }
        }
        
        // Show/hide card
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Initialize filters when DOM is ready
document.addEventListener('DOMContentLoaded', initFilters);

// ========================================
// BLOG LOAD MORE (for blog page)
// ========================================
let visibleBlogs = 8;

function loadMoreBlogs() {
    const blogCards = document.querySelectorAll('.blog-card');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    for (let i = visibleBlogs; i < Math.min(visibleBlogs + 4, blogCards.length); i++) {
        blogCards[i].style.display = 'block';
    }
    
    visibleBlogs += 4;
    
    if (visibleBlogs >= blogCards.length && loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// ========================================
// ACTIVE NAV LINK HIGHLIGHTING
// ========================================
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Update active nav link on page load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ========================================
// BOTTOM NAV ACTIVE STATE
// ========================================
function updateBottomNavActive() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    
    bottomNavItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Update bottom nav on page load
document.addEventListener('DOMContentLoaded', updateBottomNavActive);

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Format currency
function formatCurrency(amount) {
    return '₦' + amount.toLocaleString('en-NG');
}

// Validate email
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Validate phone
function isValidPhone(phone) {
    const pattern = /^[\d\s+()-]{10,}$/;
    return pattern.test(phone);
}

// ========================================
// ACCESSIBILITY - FOCUS TRAP FOR MODALS
// ========================================
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// Apply focus trap to all modals
document.querySelectorAll('.modal').forEach(modal => {
    trapFocus(modal);
});

// ========================================
// REDUCED MOTION SUPPORT
// ========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable or simplify animations
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
    document.documentElement.style.setProperty('--transition-normal', '0.01ms');
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c🏠 PHIRE\'S PRIME PROPERTIES', 'font-size: 20px; font-weight: bold; color: #006838;');
console.log('%cBuilding Dreams, Creating Wealth', 'font-size: 14px; color: #C1272D;');
console.log('%cWebsite developed with HTML, CSS, and Vanilla JavaScript', 'font-size: 12px; color: #666;');
