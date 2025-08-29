const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Function to check if the service cards are visible on scroll
function checkCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    const triggerBottom = window.innerHeight * 0.9; // 90% of the viewport height

    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show'); // Adds class when the card is visible
        } else {
            card.classList.remove('show'); // Removes class when it's not visible
        }
    });
}

// Get all the service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add click event listener to each card for mobile devices
serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        // Remove the active class from all cards
        serviceCards.forEach(c => c.classList.remove('active'));

        // Add the active class to the clicked card
        this.classList.add('active');
    });
});