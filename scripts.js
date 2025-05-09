console.log("FAQ script is running...");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// JavaScript for handling file upload and actions
document.getElementById('file-upload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        document.getElementById('actions').style.display = 'flex';
        document.getElementById('translate-options').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('account-prompt').style.display = 'none';
    }
});

function showTranslateOptions() {
    document.getElementById('translate-options').style.display = 'block';
}

function performAction(action) {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (file) {
        let resultText = "";
        switch (action) {
            case 'proofread':
                resultText = "Proofreading result: 12 errors found and corrected, here is a preview of the new document and corrections made.";
                break;
            case 'rewrite':
                resultText = "Rewritten text: This is a rewritten version of the document.";
                break;
            case 'translate':
                const language = document.getElementById('language-select').value;
                resultText = `Translated text: This is the translated version of the document in ${language}.`;
                break;
                case 'convert':
                resultText = "Converted document: The document has been converted to PDF.";
                break;
        }

        // Display the result
        document.getElementById('result-text').innerText = resultText;
        document.getElementById('result').style.display = 'block';

        // Simulate daily limit for new users
        const dailyLimitReached = false; // Replace with actual logic
        if (dailyLimitReached) {
            document.getElementById('account-prompt').style.display = 'block';
        }
    }
}

// JavaScript for handling login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate login (replace with actual authentication logic)
    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Google Sign-In Success Handler

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// JavaScript for handling file upload and actions
document.getElementById('file-upload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        document.getElementById('actions').style.display = 'flex';
        document.getElementById('translate-options').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('account-prompt').style.display = 'none';
    }
});

function showTranslateOptions() {
    document.getElementById('translate-options').style.display = 'block';
}

function performAction(action) {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (file) {
        let resultText = "";
        switch (action) {
            case 'proofread':
                resultText = "Proofreading result: 12 errors found and corrected, here is a preview of the new document and corrections made.";
                break;
            case 'rewrite':
                resultText = "Rewritten text: This is a rewritten version of the document.";
                break;
            case 'translate':
                const language = document.getElementById('language-select').value;
                resultText = `Translated text: This is the translated version of the document in ${language}.`;
                break;
                case 'convert':
                resultText = "Converted document: The document has been converted to PDF.";
                break;
        }

        // Display the result
        document.getElementById('result-text').innerText = resultText;
        document.getElementById('result').style.display = 'block';

        // Simulate daily limit for new users
        const dailyLimitReached = false; // Replace with actual logic
        if (dailyLimitReached) {
            document.getElementById('account-prompt').style.display = 'block';
        }
    }
}

// JavaScript for handling login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate login (replace with actual authentication logic)
    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Google sign in button
document.getElementById('googleSignInBtn').addEventListener('click', function() {
    alert('Google Sign-In clicked! (Button is interactive but not functional yet)');
});

// Form validation and redirect
const signupForm = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordStrength = document.getElementById('passwordStrength');
const passwordMatch = document.getElementById('passwordMatch');

signupForm.addEventListener('submit', function (event) {
  let valid = true;

  // Check Password Strength
  if (passwordInput.value.length < 6) {
    passwordStrength.style.display = 'block';
    valid = false;
  } else {
    passwordStrength.style.display = 'none';
  }

  // Check Password Match
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordMatch.style.display = 'block';
    valid = false;
  } else {
    passwordMatch.style.display = 'none';
  }

  if (!valid) {
    event.preventDefault(); // Stop submission
  } else {
    event.preventDefault();
    alert('Account created successfully!');
    window.location.href = 'login.html'; // Redirect to login page
  }
});

// Contact Us Section
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulated form submission
    const status = document.getElementById('form-status');
    status.textContent = 'Sending...';

    setTimeout(() => {
        status.textContent = 'Thank you! Your message has been sent.';
        document.getElementById('contact-form').reset();
    }, 1500);
});

function goToContact() {
    window.location.href = "contact.html";
}

// FAQs SECTION
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;

            button.classList.toggle('active');
            answer.classList.toggle('open');
        });
    });
});