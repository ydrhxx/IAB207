const loginWrapper = document.getElementById('loginWrapper');
const registerWrapper = document.getElementById('registerWrapper');
const registerLink = document.querySelector('.registerLink');
const loginLink = document.querySelector('.loginLink');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const iconClose = document.querySelectorAll('.icon-close');

loginBtn.addEventListener('click', () => {
  loginWrapper.classList.add('active');
});

signupBtn.addEventListener('click', () => {
  registerWrapper.classList.add('active');
});

registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginWrapper.classList.remove('active');
  registerWrapper.classList.add('active');
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  registerWrapper.classList.remove('active');
  loginWrapper.classList.add('active');
});

iconClose.forEach((icon) => {
  icon.addEventListener('click', () => {
    loginWrapper.classList.remove('active');
    registerWrapper.classList.remove('active');
  });
});

function addLoginToURL() {
  window.history.pushState(null, null, '/login');
}
