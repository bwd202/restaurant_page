export {loadPage}
import { aboutUs } from './aboutUs';
import {menu} from './menu'

// loads html modules into index.html via js
function loadPage(event) {

  // console.log('test loadPage.js')

  let container = document.querySelector('#modules')
  let module = event.target.textContent
  let flag = null

    if(container.hasChildNodes()) {

        container.innerHTML = ''
        
    }

    if(module === 'About Us') {

      let flag = false

      if(flag != true) {

        container.append(aboutUs())
        flag = true

      }
    
  } else if (module === 'Menu') {

      container.append(menu())
  }

}