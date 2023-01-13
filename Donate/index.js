import { FormatDate } from './utils/utils';
import './index.css';

const donateContainer = document.querySelector('.donates-container__donates');
const input = document.querySelector('.donate-form__donate-input');
const sum = document.querySelector('#total-amount');
const btn = document.querySelector('.donate-form__submit-button');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    const donate = new Donate(input.value);
    donate.addNewDonate();
  }
})

class Donate {
  constructor(inputValue) {
    this.inputValue = inputValue;
  }

  addNewDonate() {
    const donateItem = document.createElement('div');
    donateItem.className = 'donate-item';
    const formatDate = new FormatDate();
    donateItem.innerHTML = `${formatDate.getNowDate()} - <b> ${this.inputValue}$ </b> `;
    donateContainer.append(donateItem);
    let newSumofDonate = Number(this.#getNewSum()) + Number(this.inputValue);
    sum.textContent = String(newSumofDonate) + '$';
    input.value = '';
  }

  #getNewSum() {
    let inputSum = sum.textContent.split('');
    for (let i = 0; i < inputSum.length; i++) {
      if (inputSum[i] === '$') {
        inputSum.splice(i, 1);
        break;
      }
    }
    let myNewSum = inputSum.join('');
    return myNewSum;
  }
}








