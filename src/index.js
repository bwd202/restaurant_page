import './style.css'
import "@fontsource/urbanist"
import {loadPage} from './loadPage'
import facebook from './assets/facebook.svg'
import yelp from './assets/yelp.svg'
import bbb from './assets/bbb.svg'

  // G MAP
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

// ICONS
let facebookLogo = new Image(30,30)
let yelpLogo = new Image(30, 30)
let bbbLogo = new Image(30,30)

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