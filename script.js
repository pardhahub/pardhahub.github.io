// Toggle Light/Dark Mode
const toggleButton = document.getElementById('toggle-mode');
const bodyElement = document.body;

toggleButton.addEventListener('click', function () {
  bodyElement.classList.toggle('dark-mode');
  if (bodyElement.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Toggle Light Mode';
  } else {
    toggleButton.textContent = 'Toggle Dark Mode';
  }
});
