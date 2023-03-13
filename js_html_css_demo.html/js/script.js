const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Add event listener to form submission
form.addEventListener('submit', (event) => {
    // Prevent form submission
    event.preventDefault();

    // Check if form is valid
    if (validateForm()) {
        // Submit form data
        submitForm();
    }
});

// Form validation function
function validateForm() {
    // Initialize validation flag
    let isValid = true;

    // Check name input
    if (nameInput.value === '') {
        // Add error class to input element
        nameInput.classList.add('error');
        // Set validation flag to false
        isValid = false;
    } else {
        // Remove error class from input element
        nameInput.classList.remove('error');
    }

    // Check email input
    if (emailInput.value === '') {
        // Add error class to input element
        emailInput.classList.add('error');
        // Set validation flag to false
        isValid = false;
    } else {
        // Remove error class from input element
        emailInput.classList.remove('error');
    }

    // Check message input
    if (messageInput.value === '') {
        // Add error class to input element
        messageInput.classList.add('error');
        // Set validation flag to false
        isValid = false;
    } else {
        // Remove error class from input element
        messageInput.classList.remove('error');
    }

    // Return validation flag
    return isValid;
}

// Submit form data function
function submitForm() {
    // Get form data
    const formData = new FormData(form);

    // Send form data to server
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // Clear form inputs
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';

                // Show success message
                alert('Form submitted successfully!');
            } else {
                // Show error message
                alert('Error submitting form. Please try again later.');
            }
        })
        .catch(error => {
            // Show error message
            alert('Error submitting form. Please try again later.');
        });
}