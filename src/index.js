import './style.css'
import "@fontsource/urbanist"
import {loadPage} from './loadPage'
import facebook from './assets/facebook.svg'
import yelp from './assets/yelp.svg'
import bbb from './assets/bbb.svg'

// ICONS
let facebookLogo = new Image(50,50)
let yelpLogo = new Image(50, 50)
let bbbLogo = new Image(50, 50)

facebookLogo.src = facebook
yelpLogo.src = yelp
bbbLogo.src = bbb

facebookLogo.classList.add('icon')
yelpLogo.classList.add('icon')
bbbLogo.classList.add('icon','scaled')

document.querySelector('#socials p').append(facebookLogo, yelpLogo, bbbLogo)

// BUTTONS
let aboutBtn = document.querySelector('#navbar :last-child')
let menuBtn = document.querySelector('#navbar :first-child')

aboutBtn.addEventListener('click', loadPage)
menuBtn.addEventListener('click', loadPage)