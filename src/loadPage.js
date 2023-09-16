export {loadPage}
import { aboutUs } from './aboutUs';
import {menu} from './menu'
// import andy from './assets/andy-hay.jpg'
// import debbie from './assets/debbie-tea.jpg'

// // about us module pictures
// let andyPic = new Image(400,400)
// andyPic.src = andy

// let debbiePic = new Image(400, 400)
// debbiePic.src = debbie

// html loading module
function loadPage(event) {

    // console.log('test loadPage.js')

    // let title = document.createElement('h2')
    // title.classList.add('title-font')

    // let body = document.createElement('div')
    // body.classList.add('txt-wrapper')

    // let imgWrapper1 = document.createElement('div')
    // let imgWrapper2 = document.createElement('div')

    // imgWrapper1.classList.add('img-wrapper')
    // imgWrapper2.classList.add('img-wrapper')

    let container = document.querySelector('#modules')

    if(container.hasChildNodes()) {

        container.innerHTML = ''
    }

    let module = event.target.textContent
    
    // about us page

    if(module === 'About Us') {

        container.append(aboutUs())

    } else if (module === 'Menu') {

        // let menu = menuLoader()

        // console.log(menu)

        title.textContent = menu.title
        body.textContent = menu.content

        container.append(title, body)
    }

}