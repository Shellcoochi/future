import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
     // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['shell', 'coochi'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
     // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

  
    return element;
  }
  
  document.body.appendChild(component());