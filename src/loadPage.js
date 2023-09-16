export {loadPage}
import { aboutUs } from './aboutUs';
import {menu} from './menu'

// loads html modules into index.html via js
function loadPage(event) {

    // console.log('test loadPage.js')

    let container = document.querySelector('#modules')

    if(container.hasChildNodes()) {

        container.innerHTML = ''
    }

    let module = event.target.textContent
    
    // about us page

    if(module === 'About Us') {

        container.append(aboutUs())

    } else if (module === 'Menu') {

        container.append(menu())
    }

}