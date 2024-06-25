// DOM выделение элементов в js

//By Tegs
let title = document.getElementsByTagName('h1')
let title2 = document.querySelectorAll('h1')
console.log(title)
console.log(title2)


//By Class
let txt = document.getElementsByClassName('txt')
let txt2 = document.querySelectorAll('.txt, .f')
console.log(txt)
console.log(txt2)


//By ID
let unique = document.getElementById('unique')
let unique2 = document.querySelector('#unique')
console.log(unique)
console.log(unique2)

//InnerHTML this is <h1> Changed</h1>
title[0].innerHTML = 'Changed'

//OuterHTML this is all teg
// unique.outerHTML = '<li>Outer</li>'

//Style
unique.style.setProperty('display', 'flex')
unique.style.color = 'red'
unique.style.backgroundColor = 'yellow'
document.documentElement.style.setProperty('--display', 'grid') 

//Class
console.log(document.getElementsByTagName('h2')[0].classList)
title[0].classList.add('txt', 'f')
console.log(title[0].classList)

title[0].classList.remove('f')
console.log(title[0].classList)

console.log(title[0].classList.contains('f'))

//Attributes
title[0].className = 'txt f'
title[0].setAttribute('style', 'background-color: red')
console.log(title[0].getAttribute('class'))

//onClick
let name = document.getElementById('name')

const print = () => {
    name.value = 'Hello, ' + name.value
}

function changeColor(arg) {
    arg.style.backgroundColor = 'yellow'
}

unique.classList.add('close')
