// Form validation functions
function validateLoginForm(event) {
    event.preventDefault();
    let isValid = true;

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (!password.value) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        // Here you would typically make an API call to your backend
        console.log('Form is valid, submitting...');
        // Simulate loading state
        const submitButton = event.target.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Logging in...';
        
        // Simulate API call
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Log In';
            // Redirect to dashboard or show success message
        }, 1500);
    }

    return false;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password visibility toggle
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.classList.remove('fa-eye');
        toggleButton.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleButton.classList.remove('fa-eye-slash');
        toggleButton.classList.add('fa-eye');
    }
}

// Forgot password modal functionality
function showForgotPasswordModal(event) {
    event.preventDefault();
    const modal = document.getElementById('forgotPasswordModal');
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('forgotPasswordModal');
    const closeBtn = document.querySelector('.close-modal');

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});

// Handle forgot password form submission
function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email');
    const emailError = document.getElementById('reset-email-error');

    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        return false;
    }

    if (!isValidEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }

    // Simulate sending reset link
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Reset Link';
        document.getElementById('forgotPasswordModal').style.display = 'none';
        alert('Password reset link has been sent to your email!');
    }, 1500);

    return false;
}