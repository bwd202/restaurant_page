export {menu}

let pageContent = {
    heading: 'Menu',
    text: 'TBD',
}

// HTML

let title = document.createElement('h2')
title.classList.add('title-font')

let body = document.createElement('div')
body.classList.add('txt-wrapper')

function menu() {
    let wrapper = new DocumentFragment()

    title.innerHTML = pageContent.heading
    body.innerHTML = pageContent.text

    wrapper.append(title, body)

    return wrapper
}


