// Theme Toggle without localStorage to avoid security error
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Budget Slider
const budgetSlider = document.getElementById('budget');
const budgetValue = document.getElementById('budget-value');

if (budgetSlider && budgetValue) {
    budgetSlider.addEventListener('input', () => {
        budgetValue.textContent = `${budgetSlider.value} میلیون`;
    });
}

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchInput && searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`جستجو برای: ${query}`);
            // In a real app, this would filter products
        }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Product Card Hover Effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('TechZoom سایت مقایسه محصولات تکنولوژی');
});
