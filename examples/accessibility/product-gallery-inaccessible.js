function toggleAccordion(header) {
    const panel = header.nextElementSibling;
    header.classList.toggle('expanded');
    panel.classList.toggle('active');
}

function addToCart() {
    alert('Product added to cart!');
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    alert(`Thank you for subscribing, ${name}! We'll send updates to ${email}.`);
    form.reset();
}
