import './style.css'
import "@fontsource/urbanist";
// import Icon from './assets/facebook.svg'
import {loadPage} from './loadPage'
import { aboutUs } from './aboutUs';

let socialDiv = document.getElementById('socials')

// let facebook = new Image()

// facebook.src = Icon

// facebook.setAttribute('width', '100')
// facebook.setAttribute('height', '100')

// socialDiv.appendChild(facebook)

let menuBtn = document.querySelector('#navbar :last-child')

menuBtn.addEventListener('click', loadPage)