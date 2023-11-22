// Function to save the back-to-top button state in local storage
function saveBackToTopState() {
    var isBackToTopEnabled = document.getElementById('back-to-top').checked;
    localStorage.setItem('backToTopEnabled', isBackToTopEnabled);
}

// Function to load the back-to-top button state from local storage
function loadBackToTopState() {
    var isBackToTopEnabled = localStorage.getItem('backToTopEnabled');
    if (isBackToTopEnabled === 'true') {
        document.getElementById('back-to-top').checked = true;
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide the back-to-top button based on the checkbox state
document.getElementById('back-to-top').addEventListener('change', function () {
    var backToTopButton = document.querySelector('button');
    if (this.checked) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
