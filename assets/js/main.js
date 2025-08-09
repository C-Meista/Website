// CHAINZZ - Interactive functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('mobile-open');
      
      // Update aria-expanded for accessibility
      const isOpen = navList.classList.contains('mobile-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.header')) {
        navList.classList.remove('mobile-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = navList.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navList.classList.remove('mobile-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header background opacity on scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
      } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
      }
    });
  }
  
  // Add active class to current page navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Fade in animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .product-card, .hero-content');
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Form validation (basic)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#ff6b6b';
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
      }
    });
  });
});
