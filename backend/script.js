document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const daysInMonth = 31; // Example: January 2025

    // Generate Calendar
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        if (day === 2) {
            // Highlight January 2
            dayElement.classList.add('active');
        }
        calendar.appendChild(dayElement);
    }
});
