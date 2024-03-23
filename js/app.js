const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.item-link')
const text = $('.introduce__section-content-paragraph')
const content = $('.content')
const main__paragraph = $('.main__paragraph')


// thay doi active tren menu 
tabs.forEach((tab) => {
    tab.onclick = function()  {
        $('.item-link.active').classList.remove('active')
        this.classList.add('active')
    }
})

text.append("cum soluta nobis est eligendi optio.")
const node = document.createTextNode('cum soluta nobis est eligendi optio.')
text.appendChild(node)
 
content.innerHTML = "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."