document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/login.html';
        return;
    }
    
    // Fetch user profile
    fetchUserProfile();
    
    // Add event listeners
    document.getElementById('logout-btn').addEventListener('click', logout);
    
    // Add event listeners for header buttons
    const browseBtn = document.querySelector('.header-btn');
    const watchlistBtn = document.querySelector('.header-btn.secondary');
    const watchNowBtn = document.querySelector('.watch-btn');
    
    if (browseBtn) {
        browseBtn.addEventListener('click', () => {
            document.querySelector('#movies').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (watchlistBtn) {
        watchlistBtn.addEventListener('click', () => {
            // Find the My List section and scroll to it
            const sections = document.querySelectorAll('.dashboard-section');
            for (let section of sections) {
                if (section.querySelector('h2')?.textContent === 'My List') {
                    section.scrollIntoView({ behavior: 'smooth' });
                    break;
                }
            }
        });
    }
    
    if (watchNowBtn) {
        watchNowBtn.addEventListener('click', () => {
            alert('Playing Mr. Robot...');
            // In a real app, this would open the video player
        });
    }
    
    // Add hover effects to content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
            card.style.zIndex = '1';
        });
        
        // Update card click handler to not interfere with Buy buttons
        card.addEventListener('click', (e) => {
            // Only proceed if the click wasn't on a button
            if (!e.target.closest('button')) {
            const title = card.querySelector('h3').textContent;
            alert(`Playing ${title}...`);
            // In a real app, this would open the video player
            }
        });
    });
    
    // Initialize payment modal specific to dashboard
    initDashboardPaymentModal();
});

// Initialize payment modal functionality for dashboard
function initDashboardPaymentModal() {
    // If script.js already initialized the modal, we don't need to do it again
    // But we'll add this as a fallback in case script.js isn't loaded first
    if (typeof initPaymentModal === 'function') {
        return;
    }
    
    const paymentModal = document.getElementById('paymentModal');
    if (!paymentModal) return;
    
    const closePaymentBtn = document.getElementById('closePaymentBtn');
    const paymentForm = document.getElementById('paymentForm');
    const movieThumbnail = document.getElementById('movieThumbnail');
    const movieTitle = document.getElementById('movieTitle');
    const moviePrice = document.getElementById('moviePrice');
    
    // Get all buy now buttons
    const buyNowButtons = document.querySelectorAll('.card-btn, button[id^="buy-"]');
    
    // Add event listeners to all buy now buttons
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Extract movie data
            let title, price, image;
            
            // Try to get data from the card or surrounding elements
            const card = button.closest('.content-card') || button.closest('.recommendation-card');
            if (card) {
                title = card.querySelector('h3').textContent;
                
                // Try to extract price from button text or a price element
                const priceMatch = button.textContent.match(/\$([0-9.]+)/);
                if (priceMatch) {
                    price = priceMatch[1];
                } else {
                    // Default price if not found
                    price = '9.99';
                }
                
                // Try to get image
                const img = card.querySelector('img');
                if (img) {
                    image = img.src;
                }
            }
            
            // Fill the modal with movie data
            movieTitle.textContent = title || 'Movie Title';
            moviePrice.textContent = price || '0.00';
            if (image) {
                movieThumbnail.src = image;
            }
            
            // Open the modal
            openPaymentModal();
        });
    });
    
    // Close modal when clicking the close button
    closePaymentBtn.addEventListener('click', closePaymentModal);
    
    // Close modal when clicking outside the content
    paymentModal.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });
    
    // Handle form submission
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state on button
        const submitBtn = this.querySelector('.submit-payment-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        
        // Simulate payment processing
        setTimeout(() => {
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'payment-success';
            successMessage.innerHTML = `
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Payment Successful!</h3>
                <p>Your purchase of "${movieTitle.textContent}" is complete.</p>
                <p>You can now enjoy your content!</p>
                <button class="success-btn">Done</button>
            `;
            
            // Replace form with success message
            const paymentBody = document.querySelector('.payment-body');
            paymentBody.innerHTML = '';
            paymentBody.appendChild(successMessage);
            
            // Add event listener to done button
            const doneBtn = successMessage.querySelector('.success-btn');
            doneBtn.addEventListener('click', () => {
                closePaymentModal();
                
                // Reset the payment modal after it's closed
                setTimeout(() => {
                    paymentBody.innerHTML = '';
                    paymentBody.appendChild(document.createElement('div')).className = 'movie-details';
                    paymentBody.appendChild(document.createElement('form')).className = 'payment-form';
                    // Reinitialize the payment modal
                    initDashboardPaymentModal();
                }, 300);
            });
        }, 1500);
    });
    
    // Format credit card number with spaces
    const cardNumberInput = document.getElementById('cardNumber');
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value;
    });
    
    // Format expiry date with slash
    const expiryInput = document.getElementById('expiryDate');
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
    
    // Restrict CVV to numbers only
    const cvvInput = document.getElementById('cvv');
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
    
    // Functions to open and close the modal
    function openPaymentModal() {
        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closePaymentModal() {
        paymentModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Reset form
        paymentForm.reset();
    }
}

// Fetch user profile from API
async function fetchUserProfile() {
    const token = localStorage.getItem('authToken');
    
    try {
        const response = await fetch('/api/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            updateProfileUI(data.user);
        } else {
            console.error('Failed to fetch profile');
            // If token is invalid, redirect to login
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem('authToken');
                window.location.href = '/login.html';
            }
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        // For demo purposes, use a default user
        updateProfileUI({
            fullname: 'John Doe',
            email: 'john.doe@example.com',
            created_at: '2024-01-15'
        });
    }
}

// Update UI with user profile data
function updateProfileUI(user) {
    // Update username in navbar
    const usernameElements = document.querySelectorAll('.username, #user-name');
    usernameElements.forEach(element => {
        element.textContent = user.fullname;
    });
    
    // Update profile section
    const profileNameEl = document.getElementById('profile-name');
    const profileEmailEl = document.getElementById('profile-email');
    const memberSinceEl = document.getElementById('member-since');
    
    if (profileNameEl) profileNameEl.textContent = user.fullname;
    if (profileEmailEl) profileEmailEl.textContent = user.email;
    
    // Format date
    if (memberSinceEl && user.created_at) {
        const memberSince = new Date(user.created_at);
        memberSinceEl.textContent = memberSince.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        });
    }
}

// Logout function
function logout(e) {
    e.preventDefault();
    
    // Clear token
    localStorage.removeItem('authToken');
    
    // Redirect to login page
    window.location.href = '/login.html';
}

// Add additional styling to content sliders
document.addEventListener('DOMContentLoaded', () => {
    const contentSliders = document.querySelectorAll('.content-slider');
    
    contentSliders.forEach(slider => {
        slider.style.transition = 'all 0.3s ease';
        
        // Add hover effect for content sliders
        slider.addEventListener('mouseenter', () => {
            slider.style.transform = 'translateY(-5px)';
        });
        
        slider.addEventListener('mouseleave', () => {
            slider.style.transform = 'translateY(0)';
        });
    });
}); 