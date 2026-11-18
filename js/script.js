// ================================
// MAGOSHI EVENTS - JAVASCRIPT
// ================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // 1. NAVIGATION & HAMBURGER MENU
    // ================================
    
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hamburger Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // ================================
    // 2. STICKY NAVBAR ON SCROLL
    // ================================
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ================================
    // 3. SMOOTH SCROLLING
    // ================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or external link
            if (href === '#' || href.startsWith('http')) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ================================
    // 4. ACTIVE NAVIGATION HIGHLIGHT
    // ================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ================================
    // 5. GALLERY LIGHTBOX
    // ================================
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    const images = [];
    
    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption').textContent;
        images.push({
            src: img.src,
            alt: img.alt,
            caption: caption
        });
        
        // Open lightbox on click
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        lightbox.classList.add('active');
        updateLightboxImage();
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightboxImage() {
        if (images.length > 0) {
            lightboxImage.src = images[currentImageIndex].src;
            lightboxImage.alt = images[currentImageIndex].alt;
            lightboxCaption.textContent = images[currentImageIndex].caption;
        }
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }
    
    // Lightbox controls
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', nextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', prevImage);
    }
    
    // Close lightbox on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });
    
    // ================================
    // 6. VIDEO CONTROLS
    // ================================
    
    const eventVideo = document.getElementById('eventVideo');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    
    // Check if video file exists
    if (eventVideo) {
        eventVideo.addEventListener('error', function() {
            // Video file not found, show placeholder
            if (videoPlaceholder) {
                videoPlaceholder.style.display = 'flex';
            }
        });
        
        eventVideo.addEventListener('loadeddata', function() {
            // Video loaded successfully, hide placeholder
            if (videoPlaceholder) {
                videoPlaceholder.style.display = 'none';
            }
        });
    }
    
    // ================================
    // 7. WHATSAPP ENQUIRY FORM
    // ================================
    
    const enquiryForm = document.getElementById('enquiryForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const eventType = document.getElementById('eventType').value;
            const eventDate = document.getElementById('eventDate').value;
            const eventLocation = document.getElementById('eventLocation').value.trim();
            const numberOfGuests = document.getElementById('numberOfGuests').value;
            const servicesRequired = Array.from(document.getElementById('servicesRequired').selectedOptions)
                .map(option => option.value)
                .join(', ');
            const additionalMessage = document.getElementById('additionalMessage').value.trim();
            
            // Validate required fields
            if (!fullName || !eventType || !eventDate || !eventLocation || !numberOfGuests || !servicesRequired) {
                alert('Please fill in all required fields marked with *');
                return;
            }
            
            // Format the WhatsApp message
            let message = `Hello Magoshi Events!\n\n`;
            message += `I would like to enquire about an upcoming event.\n\n`;
            message += `Name: ${fullName}\n`;
            message += `Event Type: ${eventType}\n`;
            message += `Date: ${eventDate}\n`;
            message += `Location: ${eventLocation}\n`;
            message += `Guests: ${numberOfGuests}\n`;
            message += `Services: ${servicesRequired}\n`;
            
            if (additionalMessage) {
                message += `Additional Details: ${additionalMessage}\n`;
            }
            
            message += `\nPlease let me know about your availability and pricing.`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Open WhatsApp
            const whatsappURL = `https://wa.me/27829466671?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Optional: Reset form after submission
            // enquiryForm.reset();
        });
    }
    
    // ================================
    // 8. BACK TO TOP BUTTON
    // ================================
    
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ================================
    // 9. DYNAMIC COPYRIGHT YEAR
    // ================================
    
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // ================================
    // 10. SCROLL REVEAL ANIMATIONS
    // ================================
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function isElementPartiallyInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const verticalVisible = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        return verticalVisible;
    }
    
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            if (isElementPartiallyInViewport(element)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize animation styles
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Apply delay if specified
        const delay = element.getAttribute('data-aos-delay');
        if (delay) {
            element.style.transitionDelay = `${delay}ms`;
        }
    });
    
    // Run on scroll and on load
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('load', handleScrollAnimation);
    handleScrollAnimation(); // Run immediately
    
    // ================================
    // 11. LAZY LOADING IMAGES
    // ================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        // Observe images with loading="lazy" attribute
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ================================
    // 12. FORM ACCESSIBILITY
    // ================================
    
    // Add keyboard support for gallery
    galleryItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', 'Open image in lightbox');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
    
    // ================================
    // 13. CONSOLE MESSAGE
    // ================================
    
    console.log('%cMagoshi Events', 'color: #C9A45C; font-size: 24px; font-weight: bold;');
    console.log('%cWhere Every Detail Is Divine', 'color: #722F47; font-size: 16px;');
    console.log('%cWebsite developed for creating beautiful celebrations', 'color: #252525; font-size: 12px;');
    
});

// ================================
// 14. SERVICE WORKER (Optional)
// ================================

// Register service worker for offline support (optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(registration => console.log('Service Worker registered'))
    //     .catch(error => console.log('Service Worker registration failed:', error));
}

// ================================
// 15. PERFORMANCE OPTIMIZATION
// ================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
const efficientScrollHandler = debounce(function() {
    // Scroll-based operations here
}, 10);

window.addEventListener('scroll', efficientScrollHandler);
