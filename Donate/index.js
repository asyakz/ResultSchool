'use strict';

import { getNowDate } from './utils/utils';
import './index.css';

const donateContainer = document.querySelector('.donates-container__donates');
const input = document.querySelector('.donate-form__donate-input');
const sum = document.querySelector('#total-amount');

const btn = document.querySelector('.donate-form__submit-button');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    addNewDonate();
  }
})

function getNewSum() {
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

function addNewDonate() {
  const donateItem = document.createElement('div');
  donateItem.className = 'donate-item';
  donateItem.innerHTML = `${getNowDate()} - <b> ${input.value}$ </b> `;
  donateContainer.append(donateItem);
  let newSumofDonate = Number(getNewSum()) + Number(input.value);
  sum.textContent = String(newSumofDonate) + '$';
  input.value = '';
}








