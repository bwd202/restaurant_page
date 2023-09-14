export {loadPage}
import { aboutUs } from './aboutUs';
import {menu} from './menu'
import andy from './assets/andy-hay.jpg'

// LOREM IPSUM
import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// lorem.generateWords(1);
// lorem.generateParagraphs(7);
// lorem.generateSentences(5)

// MODULE

let andyPic = new Image(400,400)
andyPic.src = andy

function loadPage(event) {

    console.log('test loadPage.js')

    let title = document.createElement('h2')

    let body = document.createElement('div')

    let container = document.querySelector('#modules')

    if(container.hasChildNodes()) {

        container.innerHTML = ''
    }

    let module = event.target.textContent

    if(module === 'About Us') {

        title.innerHTML = aboutUs.title
        body.insertAdjacentHTML('afterbegin', aboutUs.content)
        body.insertAdjacentElement('beforeend', andyPic)
        body.insertAdjacentHTML('beforeend', lorem.generateParagraphs(1) )

        container.append(title, body)

    } else if (module === 'Menu') {

        title.innerHTML = menu.title
        body.innerHTML = menu.content

        container.append(title, body)
    }

}