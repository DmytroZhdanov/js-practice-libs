const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input'),
  messageTextarea: document.querySelector('textarea'),
};

const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

refs.emailInput.value = data.email;
refs.messageTextarea.value = data.message;
refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onBtnSbmt);

function onFormInput(evt) {
  if (evt.target.nodeName === 'INPUT') {
    data.email = evt.target.value;
  }

  if (evt.target.nodeName === 'TEXTAREA') {
    data.message = evt.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onBtnSbmt(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  const userData = {
    email: email.value,
    message: message.value,
  };

  console.log(userData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
