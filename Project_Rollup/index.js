import "./index.css";
import MY_IMAGE from './assets/fileJS.png';

const imgJS = document.createElement("img");
imgJS.src = MY_IMAGE;
imgJS.className = 'img-js';
document.body.append(imgJS);

console.log('Hello World!');

const title = document.createElement('h1');
title.className = 'title-js';
title.textContent = 'I love JavaScript';
document.body.append(title);
