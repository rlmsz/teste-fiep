document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('videoModal');
  const videoThumbnail = document.getElementById('videoThumbnail');
  const closeModal = document.querySelector('.close-modal');

  function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (videoThumbnail) {
    videoThumbnail.addEventListener('click', openModal);
  }

  if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
  }

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModalFunc();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
      closeModalFunc();
    }
  });
});
