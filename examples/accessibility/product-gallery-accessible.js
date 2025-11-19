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
    alert(`¡${productName} agregado al carrito!`);
}

// Newsletter form handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name-accessible').value;
    const email = document.getElementById('email-accessible').value;
    alert(`¡Gracias por suscribirte, ${name}! Enviaremos actualizaciones a ${email}.`);
    event.target.reset();
}
