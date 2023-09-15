export {loadPage}
import { aboutUs } from './aboutUs';
import {menu} from './menu'
import andy from './assets/andy-hay.jpg'
import debbie from './assets/debbie-tea.jpg'

// TEMPLATE

document.querySelector('#title h1').classList.add('title-font')

// LOREM IPSUM
import { LoremIpsum } from "lorem-ipsum";

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

// PICTURES
let andyPic = new Image(400,400)
andyPic.src = andy

let debbiePic = new Image(400, 400)
debbiePic.src = debbie

// MODULE
function loadPage(event) {

    // console.log('test loadPage.js')

    let title = document.createElement('h2')
    title.classList.add('title-font')

    let body = document.createElement('div')
    body.classList.add('txt-wrapper')

    let imgWrapper1 = document.createElement('div')
    let imgWrapper2 = document.createElement('div')

    imgWrapper1.classList.add('img-wrapper')
    imgWrapper2.classList.add('img-wrapper')

    let container = document.querySelector('#modules')


    if(container.hasChildNodes()) {

        container.innerHTML = ''
    }

    let module = event.target.textContent

    if(module === 'About Us') {

        title.innerHTML = aboutUs.title

        body.insertAdjacentHTML('afterbegin', aboutUs.content)

        body.insertAdjacentElement('beforeend', imgWrapper1)

        imgWrapper1.insertAdjacentElement('beforeend', andyPic)

        body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')
        body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')
        body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')

        body.insertAdjacentElement('beforeend', imgWrapper2)
        imgWrapper2.insertAdjacentElement('afterbegin', debbiePic)

        body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')
        body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')

        container.append(title, body)

    } else if (module === 'Menu') {

        title.innerHTML = menu.title
        body.innerHTML = menu.content

        container.append(title, body)
    }

}