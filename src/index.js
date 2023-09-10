import './style.css'
import "@fontsource/urbanist";
// import Icon from './assets/facebook.svg'
import {loadPage} from './loadPage'

let socialDiv = document.getElementById('socials')

// let facebook = new Image()

// facebook.src = Icon

// facebook.setAttribute('width', '100')
// facebook.setAttribute('height', '100')

// socialDiv.appendChild(facebook)

let aboutBtn = document.querySelector('#navbar :last-child')

aboutBtn.addEventListener('click', loadPage)

let menuBtn = document.querySelector('#navbar :first-child')

menuBtn.addEventListener('click', loadPage)