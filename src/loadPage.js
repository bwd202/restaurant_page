export {loadPage}
import { aboutUs } from './aboutUs';

function loadPage(event) {

    console.log('test loadPage.js')

    let title = document.createElement('h2')

    let body = document.createElement('p')

    let container = document.querySelector('#modules')

    let module = event.target.textContent

    if(module === 'About Us') {

        title.innerHTML = aboutUs.title
        body.innerHTML = aboutUs.content
    }

    container.appendChild(title)
    container.appendChild(body)

}