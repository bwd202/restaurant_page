export {loadPage}
import { aboutUs } from './aboutUs';
import {menu} from './menu'

function loadPage(event) {

    console.log('test loadPage.js')

    let title = document.createElement('h2')

    let body = document.createElement('p')

    let imgDiv = document.createElement('div')

    let container = document.querySelector('#modules')

    if(container.hasChildNodes()) {

        container.innerHTML = ''
    }

    let module = event.target.textContent

    if(module === 'About Us') {

        title.innerHTML = aboutUs.title
        body.innerHTML = aboutUs.content
        imgDiv.append(aboutUs.picture)

    } else if (module === 'Menu') {

        title.innerHTML = menu.title
        body.innerHTML = menu.content
    }

    container.append(title, body, imgDiv)
}