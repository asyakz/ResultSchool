import './index.css';

checkState();

const cookieBtn = document.querySelector('.cookie-consent__button');
cookieBtn.addEventListener('click', () => {
  document.querySelector('.cookie-consent').classList.add('hide');
  localStorage.setItem('cookie-status', 'true');
})

function checkState() {
  const cookieStatus = localStorage.getItem('cookie-status');
  if (cookieStatus) {
    document.querySelector('.cookie-consent').classList.add('hide');
  }
}
