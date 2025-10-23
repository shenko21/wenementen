/**
 * LUXE 360° - Premium Photo Booth Landing Page Scripts
 * File: assets/luxe360.js
 */

(function() {
  'use strict';

  // Package Selection
  function initPackageSelection() {
    const packageCards = document.querySelectorAll('.package-card');
    const packageSelect = document.getElementById('contact-package');

    packageCards.forEach(card => {
      card.addEventListener('click', function() {
        // Remove selected class from all cards
        packageCards.forEach(c => c.classList.remove('selected'));

        // Add selected class to clicked card
        this.classList.add('selected');

        // Update the form select if it exists
        if (packageSelect) {
          const packageType = this.getAttribute('data-package');
          if (packageType) {
            packageSelect.value = packageType;
          }
        }
      });
    });
  }

  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
          const headerOffset = 130; // Account for fixed nav and announcement bar
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Add animation on scroll
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.experience-card, .gallery-item, .package-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });
  }

  // Hide/show navigation on scroll
  function initNavScroll() {
    let lastScroll = 0;
    const nav = document.querySelector('.luxe360-nav');
    const announcementBar = document.querySelector('.announcement-bar');

    if (!nav) return;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
        if (announcementBar) announcementBar.style.transform = 'translateY(0)';
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
        if (announcementBar) announcementBar.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
        if (announcementBar) announcementBar.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    });

    // Add transition for smooth hide/show
    nav.style.transition = 'transform 0.3s ease-in-out';
    if (announcementBar) announcementBar.style.transition = 'transform 0.3s ease-in-out';
  }

  // Gallery image replacement (if using Shopify metafields or files)
  function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    // You can replace this with actual images from your Shopify files
    // Example: Load images from a metafield or collection
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        // Add lightbox or modal functionality here if needed
        console.log('Gallery item clicked:', index);
      });
    });
  }

  // Mobile menu toggle (for responsive design)
  function initMobileMenu() {
    const nav = document.querySelector('.luxe360-nav');
    const navLinks = document.querySelector('.nav-links');

    // Create mobile menu button if it doesn't exist
    if (window.innerWidth <= 768 && nav && !nav.querySelector('.mobile-menu-btn')) {
      const menuBtn = document.createElement('button');
      menuBtn.className = 'mobile-menu-btn';
      menuBtn.innerHTML = '☰';
      menuBtn.style.cssText = `
        display: block;
        background: none;
        border: 2px solid var(--gold);
        color: var(--gold);
        font-size: 1.5rem;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.3s ease;
      `;

      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
      });

      nav.appendChild(menuBtn);

      // Style for mobile nav
      if (navLinks) {
        navLinks.style.cssText = `
          position: fixed;
          top: 80px;
          left: -100%;
          width: 100%;
          height: calc(100vh - 80px);
          background: rgba(10, 10, 10, 0.98);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: left 0.3s ease;
          gap: 30px;
        `;
      }
    }
  }

  // Add CSS class for mobile nav
  const style = document.createElement('style');
  style.textContent = `
    .nav-links.mobile-active {
      left: 0 !important;
      display: flex !important;
    }

    .nav-links.mobile-active a {
      color: var(--champagne) !important;
      font-size: 1.2rem !important;
    }

    @media (max-width: 768px) {
      .mobile-menu-btn:hover {
        background: var(--gold);
        color: var(--black);
      }
    }
  `;
  document.head.appendChild(style);

  // Form validation enhancement
  function initFormValidation() {
    const form = document.querySelector('.contact-container');

    if (form && form.tagName === 'FORM') {
      form.addEventListener('submit', function(e) {
        const email = form.querySelector('input[type="email"]');
        const name = form.querySelector('input[name="contact[name]"]');

        // Basic validation
        if (email && !email.value.includes('@')) {
          e.preventDefault();
          alert('Please enter a valid email address');
          email.focus();
          return false;
        }

        if (name && name.value.trim().length < 2) {
          e.preventDefault();
          alert('Please enter your full name');
          name.focus();
          return false;
        }
      });
    }
  }

  // Initialize all functions when DOM is ready
  function init() {
    initPackageSelection();
    initSmoothScrolling();
    initScrollAnimations();
    initNavScroll();
    initGallery();
    initMobileMenu();
    initFormValidation();

    console.log('LUXE 360° initialized');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Handle window resize for mobile menu
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        navLinks.classList.remove('mobile-active');
        navLinks.style.cssText = '';
      }
    }
  });

})();
