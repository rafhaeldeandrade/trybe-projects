const buttonLogin = document.getElementById('entrar');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('senha');
const buttonEnviar = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');
const commentTextarea = document.getElementById('textarea');

buttonLogin.addEventListener('click', () => {
  if (
    inputLogin.value !== 'tryber@teste.com'
    || inputPassword.value !== '123456'
  ) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.checked === true) {
    buttonEnviar.removeAttribute('disabled');
  } else {
    buttonEnviar.setAttribute('disabled', 'disabled');
  }
});

commentTextarea.addEventListener('keyup', () => {
  const spanCount = document.getElementById('counter');
  const contador = commentTextarea.value.length;

  if (commentTextarea.value === 0) {
    spanCount.innerText = '500';
  } else {
    spanCount.innerText = 500 - contador;
  }
});
