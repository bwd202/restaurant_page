import './style.css'
import "@fontsource/urbanist/300.css"
import "@fontsource/noto-serif/latin-400.css"
import {loadPage} from './loadPage'
import {menu} from './menu'
import facebook from './assets/facebook.svg'
import yelp from './assets/yelp.svg'
import bbb from './assets/bbb.svg'

  // MAP
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 47.90, lng: 106.88 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

// Additions to index.html
document.querySelector('#title h1').classList.add('title-font')

// buttons
let aboutBtn = document.querySelector('#navbar :last-child')
let menuBtn = document.querySelector('#navbar :first-child')

aboutBtn.addEventListener('click', loadPage)
menuBtn.addEventListener('click', loadPage)

// default loaded module

let container = document.querySelector('#modules')

container.append(menu())

// #FOOTER
let facebookLogo = new Image(30,30)
let yelpLogo = new Image(30, 30)
let bbbLogo = new Image(30,30)

facebookLogo.src = facebook
yelpLogo.src = yelp
bbbLogo.src = bbb

facebookLogo.classList.add('icon', 'button')
yelpLogo.classList.add('icon', 'button')
bbbLogo.classList.add('icon','scaled', 'button')

document.querySelector('#socials p').append(facebookLogo, yelpLogo, bbbLogo)