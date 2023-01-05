import "./index.css";

console.log('Hello World!');

import MY_IMAGE from './assets/fileJS.png';

const imgJs = document.createElement("img");
imgJs.src = MY_IMAGE;
imgJs.className = 'img-js';
document.body.append(imgJs);

