const readMoreButton = document.querySelector('.read-more-button');

const readMoreModalWrapper = document.querySelector('.read-more-modal');

const readMoreModalCloseButton = document.querySelector(
  '.read-more-modal-close-button',
);

readMoreButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click event from reaching the body listener
  readMoreModalWrapper.classList.remove('hidden');
});

readMoreModalCloseButton.addEventListener('click', () => {
  readMoreModalWrapper.classList.add('hidden');
});

document.querySelector('body').addEventListener('click', (e) => {
  if (!readMoreModalWrapper.contains(e.target)) {
    // Check if the clicked element is outside the modal wrapper
    // Close the modal
    readMoreModalWrapper.classList.add('hidden');
  }
});
