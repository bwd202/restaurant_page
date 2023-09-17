export {aboutUs}
import andy from './assets/andy-hay.jpg'
import debbie from './assets/debbie-tea.jpg'
import { LoremIpsum } from "lorem-ipsum";

// Lorem Ipsum script

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

// About Us pictures
let andyPic = new Image(400,400)
andyPic.src = andy

let debbiePic = new Image(400, 400)
debbiePic.src = debbie

// HTML
let title = document.createElement('h2')
title.classList.add('title-font')

let body = document.createElement('div')
body.classList.add('txt-wrapper')

let imgWrapper1 = document.createElement('div')
let imgWrapper2 = document.createElement('div')

imgWrapper1.classList.add('img-wrapper')
imgWrapper2.classList.add('img-wrapper')

// module creator
function aboutUs() {

  if(body.hasChildNodes()) {
    body.innerHTML = ''
  }

    let moduleWrap = new DocumentFragment()

    title.innerHTML = 'about us'

    body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')
    body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')

    body.insertAdjacentElement('beforeend', imgWrapper1)
    imgWrapper1.insertAdjacentElement('beforeend', andyPic)

    body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')
    body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')
    body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')

    body.insertAdjacentElement('beforeend', imgWrapper2)
    imgWrapper2.insertAdjacentElement('afterbegin', debbiePic)

    body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')
    body.insertAdjacentHTML('beforeend', '<p>' + lorem.generateParagraphs(1) + '</p>')

    moduleWrap.append(title, body)

    return moduleWrap

}