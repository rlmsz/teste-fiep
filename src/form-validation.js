document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  // Add input masks
  const phoneInput = document.getElementById('telefone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.substring(0, 11);

      if (value.length > 2) {
        value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
      }
      if (value.length > 10) {
        value = `${value.substring(0, 10)}-${value.substring(10)}`;
      }
      e.target.value = value;
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error-message').forEach((el) => el.remove());
    document
      .querySelectorAll('.error')
      .forEach((el) => el.classList.remove('error'));

    const nameInput = document.getElementById('nome');
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Por favor, insira seu nome');
      isValid = false;
    } else if (nameInput.value.trim().length < 3) {
      showError(nameInput, 'O nome deve ter pelo menos 3 caracteres');
      isValid = false;
    }

    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Por favor, insira seu e-mail');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Por favor, insira um e-mail válido');
      isValid = false;
    }

    if (phoneInput) {
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (!phoneDigits) {
        showError(phoneInput, 'Por favor, insira seu telefone');
        isValid = false;
      } else if (phoneDigits.length < 10 || phoneDigits.length > 11) {
        showError(
          phoneInput,
          'Por favor, insira um telefone válido (10 ou 11 dígitos)'
        );
        isValid = false;
      }
    }

    if (isValid) {
      alert('Formulário enviado com sucesso!');
      form.reset();
    }
  });

  function showError(input, message) {
    const container = input.closest('.section-4-input-container');
    if (!container) return;

    input.classList.add('error');
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ff6b6b';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '4px';
    errorElement.textContent = message;
    container.appendChild(errorElement);
  }
});
