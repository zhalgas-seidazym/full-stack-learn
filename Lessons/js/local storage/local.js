// work with local storage 

localStorage.setItem('key', 'value')

localStorage.removeItem('key', 'value')

localStorage.getItem('key')

localStorage.clear()

// also we can put threre objects

let object = {
    name: 'Zhalgas', 
    age: 18
}

localStorage.setItem('me', JSON.stringify(object))/* putting obects as string */

let getObj = JSON.parse(localStorage.getItem('me')) /* string as object */
