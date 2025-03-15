document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with public key
    (function() {
        // Replace with your actual EmailJS public key
        emailjs.init("YOUR_PUBLIC_KEY");
    })();

    // Fixed header behavior
    const header = document.querySelector('header');
    const scrollWatcher = () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', scrollWatcher);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form handling with EmailJS
    const contactForm = document.getElementById('customerForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Get selected locations (multiple select)
            const locationSelect = document.getElementById('location');
            const selectedLocations = Array.from(locationSelect.selectedOptions)
                .map(option => option.textContent)
                .join(', ');
            
            // Add the selected locations to a hidden field for EmailJS
            const locationsInput = document.createElement('input');
            locationsInput.type = 'hidden';
            locationsInput.name = 'selected_locations';
            locationsInput.value = selectedLocations;
            contactForm.appendChild(locationsInput);
            
            // Send the email using EmailJS
            // Replace these values with your actual EmailJS template and service IDs
            emailjs.sendForm('service_klpnd8p', 'template_z3pq1hc', contactForm, 'kjgQ6x_nOV6FYKAVu')
                .then(function() {
                    // Remove the temporary hidden field
                    contactForm.removeChild(locationsInput);
                    
                    // Show success message
                    const formContainer = contactForm.parentElement;
                    contactForm.style.display = 'none';
                    
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <h3>Thank you for reaching out!</h3>
                        <p>Hello ${document.getElementById('name').value}, I've received your inquiry and will get back to you within 24 hours.</p>
                        <p>A confirmation has been sent to ${document.getElementById('email').value}</p>
                        <button id="newInquiry" class="btn btn-primary">Submit Another Inquiry</button>
                    `;
                    
                    formContainer.appendChild(successMessage);
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Add handler to submit another inquiry
                    document.getElementById('newInquiry').addEventListener('click', function() {
                        successMessage.remove();
                        contactForm.style.display = 'block';
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                    });
                })
                .catch(function(error) {
                    console.error('EmailJS error:', error);
                    alert('Sorry, there was an error sending your message. Please try again later.');
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                });
        });
    }
    
    // Add CSS class for visited area cards
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
}); 