export {loadPage}
import { aboutUs } from './aboutUs';
import {menu} from './menu'

// loads html modules into index.html via js
function loadPage(event) {

  // console.log('test loadPage.js')

  let container = document.querySelector('#modules')
  let moduleName = event.target.textContent
  
if(container.hasChildNodes()) {

    container.innerHTML = ''
}

if(moduleName === 'About Us') {

    container.append(aboutUs())

  }

if (moduleName === 'Menu') {

    container.append(menu())
}

} 