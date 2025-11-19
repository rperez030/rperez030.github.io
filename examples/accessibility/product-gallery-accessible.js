// Accessible accordion implementation
function toggleAccordion(button) {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    
    // Toggle current panel
    button.setAttribute('aria-expanded', !expanded);
    panel.classList.toggle('active');
}

// Add to cart handler
function addToCart(button) {
    const productName = button.closest('.product-details').querySelector('h4').textContent;
    alert(`${productName} added to cart!`);
}

// Newsletter form handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name-accessible').value;
    const email = document.getElementById('email-accessible').value;
    alert(`Thank you for subscribing, ${name}! We'll send updates to ${email}.`);
    event.target.reset();
}
