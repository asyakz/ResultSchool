'use strict';

export function getNowDate() {
  const fullMonth = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date();
  const month = fullMonth[date.getMonth()];
  const day = date.getDay() + 'th';
  const year = date.getFullYear();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const now = month + ' ' + day + ' ' + year + ', ' + getTwoDigitNumbers(hours) + ':' + getTwoDigitNumbers(min) + ':' + getTwoDigitNumbers(sec) + ' ' + getAmPm(hours);
  return now;
}

function getTwoDigitNumbers(number) {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}

function getAmPm(hours) {
  if (hours > 12) {
    return 'pm';
  } else {
    return 'am';
  }
}

