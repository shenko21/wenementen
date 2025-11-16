/**
 * LUXE 360° - Premium Photo Booth Website Script
 * Author: LUXE 360°
 * Description: Enhanced JavaScript with better structure and error handling
 */

(function() {
    'use strict';

    // ===================================
    // UTILITY FUNCTIONS
    // ===================================

    const Utils = {
        /**
         * Debounce function to limit rate of function calls
         * @param {Function} func - Function to debounce
         * @param {number} wait - Wait time in milliseconds
         * @returns {Function}
         */
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        /**
         * Check if element is in viewport
         * @param {HTMLElement} el - Element to check
         * @returns {boolean}
         */
        isInViewport: function(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    };

    // ===================================
    // NAVIGATION FUNCTIONALITY
    // ===================================

    const Navigation = {
        init: function() {
            this.setupMobileMenu();
            this.setupSmoothScroll();
            this.setupScrollEffect();
        },

        /**
         * Setup mobile menu toggle
         */
        setupMobileMenu: function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            if (!menuToggle || !navLinks) {
                console.warn('Mobile menu elements not found');
                return;
            }

            menuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');

                // Update ARIA attributes
                const isExpanded = this.classList.contains('active');
                this.setAttribute('aria-expanded', isExpanded);
            });

            // Close menu when clicking on a link
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        },

        /**
         * Setup smooth scrolling for anchor links
         */
        setupSmoothScroll: function() {
            const anchors = document.querySelectorAll('a[href^="#"]');

            anchors.forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');

                    // Ignore empty hash
                    if (href === '#') {
                        e.preventDefault();
                        return;
                    }

                    const target = document.querySelector(href);

                    if (target) {
                        e.preventDefault();
                        const offsetTop = target.offsetTop - 100; // Account for fixed nav

                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },

        /**
         * Add scroll effect to navigation
         */
        setupScrollEffect: function() {
            const nav = document.querySelector('nav');

            if (!nav) {
                console.warn('Navigation element not found');
                return;
            }

            const handleScroll = Utils.debounce(function() {
                if (window.scrollY > 100) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }, 10);

            window.addEventListener('scroll', handleScroll);
        }
    };

    // ===================================
    // PACKAGE SELECTION
    // ===================================

    const PackageSelector = {
        init: function() {
            this.setupPackageCards();
        },

        /**
         * Setup interactive package cards
         */
        setupPackageCards: function() {
            const packageCards = document.querySelectorAll('.package-card');

            if (packageCards.length === 0) {
                console.warn('No package cards found');
                return;
            }

            packageCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Remove selected class from all cards
                    packageCards.forEach(c => {
                        c.classList.remove('selected');
                        c.setAttribute('aria-selected', 'false');
                    });

                    // Add selected class to clicked card
                    this.classList.add('selected');
                    this.setAttribute('aria-selected', 'true');

                    // Pre-select in form if exists
                    const packageName = this.querySelector('.package-name')?.textContent.toLowerCase();
                    const packageSelect = document.querySelector('select[name="package"], #package-select');

                    if (packageSelect && packageName) {
                        const options = Array.from(packageSelect.options);
                        const matchingOption = options.find(opt =>
                            opt.value.toLowerCase().includes(packageName.split(' ')[0])
                        );

                        if (matchingOption) {
                            packageSelect.value = matchingOption.value;
                        }
                    }
                });

                // Make cards keyboard accessible
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-selected', 'false');

                card.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });
        }
    };

    // ===================================
    // FORM HANDLING
    // ===================================

    const FormHandler = {
        init: function() {
            this.setupFormValidation();
        },

        /**
         * Setup form validation and submission
         */
        setupFormValidation: function() {
            const form = document.querySelector('.contact-container');

            if (!form) {
                console.warn('Contact form not found');
                return;
            }

            // Add name attributes to inputs if missing
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach((input, index) => {
                if (!input.name) {
                    const label = input.previousElementSibling;
                    const nameFromLabel = label ?
                        label.textContent.toLowerCase().replace(/[^a-z]/g, '') :
                        `field_${index}`;
                    input.name = nameFromLabel;
                }
            });

            form.addEventListener('submit', this.handleSubmit.bind(this));

            // Real-time validation
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });

                input.addEventListener('input', () => {
                    if (input.classList.contains('error')) {
                        this.validateField(input);
                    }
                });
            });
        },

        /**
         * Validate individual field
         * @param {HTMLElement} field - Input field to validate
         * @returns {boolean}
         */
        validateField: function(field) {
            const value = field.value.trim();
            const isRequired = field.hasAttribute('required');
            let isValid = true;
            let errorMessage = '';

            // Remove previous error state
            field.classList.remove('error');
            const existingError = field.parentElement.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }

            // Check if required field is empty
            if (isRequired && !value) {
                isValid = false;
                errorMessage = 'This field is required';
            }

            // Email validation
            if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
            }

            // Phone validation (optional but should be valid if provided)
            if (field.type === 'tel' && value) {
                const phoneRegex = /^[\d\s\+\-\(\)]+$/;
                if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 8) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
            }

            // Display error if invalid
            if (!isValid) {
                field.classList.add('error');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message show';
                errorDiv.textContent = errorMessage;
                field.parentElement.appendChild(errorDiv);
            }

            return isValid;
        },

        /**
         * Handle form submission
         * @param {Event} event - Submit event
         */
        handleSubmit: function(event) {
            event.preventDefault();

            const form = event.target;
            const inputs = form.querySelectorAll('input, select, textarea');
            let isFormValid = true;

            // Validate all fields
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                // Focus first error field
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
                return;
            }

            // Disable submit button
            const submitBtn = form.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'SENDING...';
            }

            // Collect form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            console.log('Form data:', data);

            // Simulate submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                this.showSuccessMessage(form);

                // Reset form
                form.reset();

                // Re-enable button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'SUBMIT INQUIRY';
                }

                // Clear package selection
                const packageCards = document.querySelectorAll('.package-card');
                packageCards.forEach(card => {
                    card.classList.remove('selected');
                    card.setAttribute('aria-selected', 'false');
                });
            }, 1500);
        },

        /**
         * Show success message
         * @param {HTMLElement} form - Form element
         */
        showSuccessMessage: function(form) {
            // Create success message
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.style.cssText = `
                background: linear-gradient(135deg, #D4AF37, #B8941F);
                color: #0A0A0A;
                padding: 20px;
                margin-bottom: 20px;
                text-align: center;
                font-weight: 600;
                letter-spacing: 1px;
                border-radius: 4px;
            `;
            successDiv.textContent = '✓ Thank you! We will contact you shortly to discuss your luxury 360° experience.';

            form.insertBefore(successDiv, form.firstChild);

            // Remove after 5 seconds
            setTimeout(() => {
                successDiv.style.opacity = '0';
                successDiv.style.transition = 'opacity 0.5s ease';
                setTimeout(() => successDiv.remove(), 500);
            }, 5000);

            // Scroll to success message
            successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    // ===================================
    // SCROLL ANIMATIONS
    // ===================================

    const ScrollAnimations = {
        init: function() {
            this.setupIntersectionObserver();
            this.setupParallaxEffect();
            this.setupCounterAnimation();
            this.setupTextReveal();
        },

        /**
         * Setup Intersection Observer for scroll animations
         */
        setupIntersectionObserver: function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';

                        // Unobserve after animation
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe elements
            const animatedElements = document.querySelectorAll(
                '.experience-card, .package-card, .gallery-item'
            );

            animatedElements.forEach((el, index) => {
                // Set initial state
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;

                observer.observe(el);
            });

            // Section headers with reveal animation
            const sectionHeaders = document.querySelectorAll('.section-header');
            sectionHeaders.forEach(header => {
                header.style.opacity = '0';
                header.style.transform = 'translateY(40px)';
                header.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';

                const headerObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            headerObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.3 });

                headerObserver.observe(header);
            });
        },

        /**
         * Subtle parallax effect on scroll
         */
        setupParallaxEffect: function() {
            const hero = document.querySelector('.hero');
            if (!hero) return;

            window.addEventListener('scroll', Utils.debounce(() => {
                const scrolled = window.pageYOffset;
                const heroContent = hero.querySelector('.hero-content');

                if (heroContent && scrolled < window.innerHeight) {
                    const rate = scrolled * 0.3;
                    heroContent.style.transform = `translateY(${rate}px)`;
                    heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
                }
            }, 10));
        },

        /**
         * Animate counters when visible
         */
        setupCounterAnimation: function() {
            const prices = document.querySelectorAll('.package-price-sale, .package-price');

            prices.forEach(price => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                            entry.target.classList.add('animated');
                            this.animatePrice(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });

                observer.observe(price);
            });
        },

        /**
         * Animate price number
         */
        animatePrice: function(element) {
            const text = element.textContent;
            const match = text.match(/€([\d,]+)/);
            if (!match) return;

            const targetNumber = parseInt(match[1].replace(',', ''));
            const duration = 1500;
            const start = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth deceleration
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentNumber = Math.floor(targetNumber * easeOutQuart);

                element.textContent = `€${currentNumber.toLocaleString()}`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    element.textContent = text;
                }
            };

            requestAnimationFrame(animate);
        },

        /**
         * Text reveal animation for headings
         */
        setupTextReveal: function() {
            const heroTitle = document.querySelector('.hero h1');
            if (!heroTitle) return;

            const text = heroTitle.innerHTML;
            heroTitle.innerHTML = '';

            // Split by <br> to preserve line breaks
            const lines = text.split('<br>');

            lines.forEach((line, lineIndex) => {
                const lineSpan = document.createElement('span');
                lineSpan.style.display = 'block';
                lineSpan.style.overflow = 'hidden';

                const chars = line.trim().split('');
                chars.forEach((char, charIndex) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.display = 'inline-block';
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(100%)';
                    span.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(lineIndex * 0.3) + (charIndex * 0.03)}s`;
                    lineSpan.appendChild(span);
                });

                heroTitle.appendChild(lineSpan);

                if (lineIndex < lines.length - 1) {
                    heroTitle.appendChild(document.createElement('br'));
                }
            });

            // Trigger animation
            setTimeout(() => {
                const spans = heroTitle.querySelectorAll('span span');
                spans.forEach(span => {
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                });
            }, 300);
        }
    };

    // ===================================
    // INITIALIZATION
    // ===================================

    /**
     * Initialize all modules when DOM is ready
     */
    function init() {
        try {
            Navigation.init();
            PackageSelector.init();
            FormHandler.init();
            ScrollAnimations.init();

            console.log('LUXE 360° website initialized successfully');
        } catch (error) {
            console.error('Error initializing website:', error);
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose utilities for debugging (only in development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.LUXE360Debug = {
            Utils,
            Navigation,
            PackageSelector,
            FormHandler,
            ScrollAnimations
        };
    }

})();
