//
// main.js

//
// AUTHOR
//
// Developed by Christian MacMillan in 2016
// https://github.com/cmacmillanmarin
// hello@christian-macmillan.com
//

import { TweenMax } from 'gsap';
import Hello from './components/hello'

import './assets/css/main.scss';

const $el = document.querySelector('#app');

const nde = document.createElement('p');
const msg = document.createTextNode(Hello.msg);
nde.appendChild(msg);
$el.appendChild(nde);

TweenMax.from($el, 0.5, { autoAlpha: 0, y: 20 });
