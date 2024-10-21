function validateInputs() {
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    if (username === 'AliVeliCumali' && password === '1234567890') {
        return true;
    }

    alert('Invalid username or password!');
    return false;
}

function submitForm(event) {
    // Prevent form submission initially
    event.preventDefault();

    if (validateInputs()) {
        // If validation passes, redirect to another URL
        window.location.href = "0_homepage-sales/index.html";
    }
}

let loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit", submitForm);

