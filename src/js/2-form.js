const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email') {
    formData.email = value.trim().toLowerCase();
  } else if (name === 'message') {
    formData.message = value.trim();
  }

  saveToLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.elements.email.value = '';
  form.elements.message.value = '';
});

loadFromLocalStorage();
