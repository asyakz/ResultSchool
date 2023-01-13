export class FormatDate {
  constructor() {
    this.fullMonth = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    this.date = new Date();
    this.month = this.fullMonth[this.date.getMonth()];
    this.day = this.date.getDate() + 'th';
    this.year = this.date.getFullYear();
    this.hours = this.date.getHours();
    this.min = this.date.getMinutes();
    this.sec = this.date.getSeconds();
  }

  getNowDate() {
    const now = this.month + ' ' + this.day + ' ' + this.year + ', ' + this.#getTwoDigitNumbers(this.hours) + ':' + this.#getTwoDigitNumbers(this.min) + ':' + this.#getTwoDigitNumbers(this.sec) + ' ' + this.#getAmPm(this.hours);
    return now;
  }

  #getTwoDigitNumbers(number) {
    if (number < 10) {
      number = '0' + number;
    }
    return number;
  }

  #getAmPm(hours) {
    if (hours > 12) {
      return 'pm';
    } else {
      return 'am';
    }
  }
}

