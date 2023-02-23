/* Variables */
const form = document.getElementById('form');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');
const closeBtn = document.getElementById('closeBtn');
const success = document.getElementById('success');
const passwordEye = document.getElementById('showPassword');
const eyeHide = document.getElementById('eyeHide');
const eyeShow = document.getElementById('eyeShow');

// Form Submission Validation
form.addEventListener('submit', (e) => {
  if (!emailField.value || !passwordField.value) {
    emailField.classList.add('error');
    passwordField.classList.add('error');
    passwordEye.classList.add('hide');

    setTimeout(() => {
      emailField.classList.remove('error');
      passwordField.classList.remove('error');
      passwordEye.classList.remove('hide');
    }, 3000);

    e.preventDefault();
  } else {
    success.classList.remove('hide');
    closeBtn.classList.remove('hide');
    e.preventDefault();
    form.reset();
  }
});

// Close Success Page
closeBtn.addEventListener('click', (e) => {
  success.classList.add('hide');
  closeBtn.classList.add('hide');
  e.preventDefault();
});

// Show Hide Password
let show = false;
passwordEye.addEventListener('click', () => {
  if (show) {
    passwordField.setAttribute('type', 'password');
    eyeShow.classList.remove('hide');
    eyeHide.classList.add('hide');
    show = false;
  } else {
    passwordField.setAttribute('type', 'text');
    eyeShow.classList.add('hide');
    eyeHide.classList.remove('hide');
    show = true;
  }
});
