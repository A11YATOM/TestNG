document.querySelectorAll('.toolbar-button:not(:disabled)').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle aria-pressed for toggle buttons
        const isPressed = button.getAttribute('aria-pressed') === 'true';
        button.setAttribute('aria-pressed', !isPressed);
        
        // Add your button functionality here
        alert(`You clicked ${button.getAttribute('aria-label')} - Pressed: ${!isPressed}`);
    });

    button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            button.click();
            event.preventDefault(); // Prevent page scroll on spacebar
        }
    });
});
