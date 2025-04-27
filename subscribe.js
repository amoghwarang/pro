document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const planId = params.get('plan') || '2'; // Default to Premium (2) if not specified
    
    // Set up plan details based on plan ID
    updatePlanDetails(planId);
    
    // Format card number with spaces
    const cardInput = document.getElementById('card_number');
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '');
            if (value.length > 0) {
                value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
            }
            e.target.value = value;
        });
    }
    
    // Format expiry date
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // Handle form submission
    const form = document.getElementById('subscribeForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            // Create form data
            const formData = new FormData(form);
            
            // Convert FormData to JSON
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Add user_id from localStorage or use a default for testing
            const userId = localStorage.getItem('userId') || '1';
            data.user_id = userId;
            
            console.log('Sending subscription data:', data);
            
            // Get auth token from localStorage
            const token = localStorage.getItem('authToken');
            const headers = {
                'Content-Type': 'application/json'
            };
            
            // Add auth token if available
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            
            // Send to server
            fetch('/subscribe', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                if (data.success) {
                    // Redirect to success page
                    const planId = document.getElementById('plan_id').value;
                    window.location.href = 'subscription-success.html?plan=' + planId;
                } else {
                    // Show error
                    showError(data.message || 'There was an error processing your subscription. Please try again.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                showError('There was an error connecting to the server. Please try again.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});

function updatePlanDetails(planId) {
    // Update hidden form fields
    document.getElementById('plan_id').value = planId;
    
    let planName, planPrice, planDescription;
    
    // Set plan details based on plan ID
    switch (planId) {
        case '1':
            planName = 'Basic';
            planPrice = '9.99';
            planDescription = 'HD Available, Watch on 1 Device, Unlimited Movies & TV Shows';
            break;
        case '2':
            planName = 'Premium';
            planPrice = '14.99';
            planDescription = 'Ultra HD Available, Watch on 2 Devices, Unlimited Movies & TV Shows';
            break;
        case '3':
            planName = 'Ultimate';
            planPrice = '19.99';
            planDescription = '4K + HDR Available, Watch on 4 Devices, Unlimited Movies & TV Shows';
            break;
        default:
            planName = 'Premium';
            planPrice = '14.99';
            planDescription = 'Ultra HD Available, Watch on 2 Devices, Unlimited Movies & TV Shows';
    }
    
    // Update displayed plan details
    document.getElementById('plan-name').textContent = planName;
    document.getElementById('plan-price').textContent = planPrice;
    document.getElementById('plan-description').textContent = planDescription;
    
    // Update hidden form fields
    document.getElementById('plan_name').value = planName;
    document.getElementById('plan_price').value = planPrice;
}

function showError(message) {
    // Remove any existing error messages
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Insert before the form
    const form = document.getElementById('subscribeForm');
    form.parentNode.insertBefore(errorDiv, form);
    
    // Scroll to error
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
} 