function toggleAccordion(header) {
    const panel = header.nextElementSibling;
    header.classList.toggle('expanded');
    panel.classList.toggle('active');
}

function addToCart() {
    alert('¡Producto agregado al carrito!');
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    alert(`¡Gracias por suscribirte, ${name}! Enviaremos actualizaciones a ${email}.`);
    form.reset();
}
