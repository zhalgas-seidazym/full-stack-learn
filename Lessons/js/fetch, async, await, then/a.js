// JSONPlaceholder and how to send query to api

// https://jsonplaceholder.typicode.com/

/* 
Payload what we send
Preview what we get
*/

// fetch()
const f = fetch('https://jsonplaceholder.typicode.com/users', 
{method: 'POST', body: JSON.stringify({name: 'Zhalgas', id: 11})})
    // or just fetch('address')
    
    
// async await - its when u need to end of one action
async function re(){
    // we need to write await before what we need to be done optional
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    document.body.innerHTML = data.map(item => JSON.stringify(item)).join('<br>');
}
// here second line does not wait for re and runs first 
re()
document.body.innerHTML='Load...';

// to call methods with await we need to put this method to async func
(async function (){
    await re()
    console.log('sgl')
})()

 

// also we have then func
// it will construct us steps of doing, what after what
(async () => {
    let fet = fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json())
    console.log(JSON.stringify(fet))
})()