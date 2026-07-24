const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  menuButton.classList.toggle('active', !isOpen);
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.classList.remove('active');
    navigation.classList.remove('open');
  });
});

const comingSoonButtons = document.querySelectorAll('[data-coming-soon]');
const resourceToast = document.querySelector('.resource-toast');
let toastTimer;

comingSoonButtons.forEach((button) => {
  button.addEventListener('click', () => {
    window.clearTimeout(toastTimer);
    resourceToast.textContent = `${button.dataset.comingSoon} link coming soon.`;
    resourceToast.classList.add('show');
    toastTimer = window.setTimeout(() => resourceToast.classList.remove('show'), 2200);
  });
});
