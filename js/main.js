/**
 * GETWEBZ — Digital Brochure Website Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar state
  const navbar = document.querySelector('.site-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Brochure Keyboard Page Turner
  document.addEventListener('keydown', (e) => {
    // Only if not focused on an input/textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      return;
    }
    
    const prevLink = document.querySelector('.page-step-link.prev-page');
    const nextLink = document.querySelector('.page-step-link.next-page');
    
    if (e.key === 'ArrowLeft' && prevLink) {
      window.location.href = prevLink.getAttribute('href');
    } else if (e.key === 'ArrowRight' && nextLink) {
      window.location.href = nextLink.getAttribute('href');
    }
  });

  // Contact Form Submission Simulation
  const contactForm = document.getElementById('brochureContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Visual feedback loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending Inquiry...';
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Show success alert
        const alertBox = document.getElementById('formSuccessAlert');
        if (alertBox) {
          alertBox.classList.remove('d-none');
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        contactForm.reset();
      }, 1000);
    });
  }
});
