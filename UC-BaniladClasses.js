document.addEventListener('DOMContentLoaded', function () {
    function openModalById(modalId) {
        const modal = document.getElementById(modalId);
        const overlay = document.getElementById('overlay');
        if (modal && overlay) {
            modal.classList.add('active');
            overlay.classList.add('active');
        }
    }
});
const overlay = document.getElementById('overlay');

function openModalById(modalId) {
  const modal = document.getElementById(modalId);
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

document.querySelectorAll('[data-close-btn]').forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
