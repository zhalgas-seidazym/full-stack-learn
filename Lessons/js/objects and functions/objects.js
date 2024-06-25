// objects and functions

/* objects here like arrays */

let user = {
    name: 'Zhalgas',
    age: '19'
}

/* we can show variable */
user.name
user[name]

/* we can add new variable */
user.gender = 'male'
user['gender'] = 'male'
/* or delete key with value */
delete user.age

/* values */
let values = Object.values(user)
/* keys */
let keys = Object.keys(user)
/* keys with values in small arrays(entries) */
let entries = Object.entries(user)

// -------------------------------------------------------
for(let key in user){
    console.log(key + ': ' + user[key])
}

// -------------------------------------------------------
class MyClass {
    myVariable = 'fdsfsdfsdf'
    variable;
    
    constructor() {
        this.myVariable = "значение переменной";
    }

    myMethod() {
        console.log("Привет, это метод класса!");
    }
}

let my = new MyClass();


// --------------------------------------------------------
function myFunction(arg = 'default') {
    console.log("Привет, это функция!" + arg);
}
myFunction()

let myFunction1 = function(arg) {
    console.log("Привет, это функция!");
}



let myFunction2 = (arg) => {
    console.log("Привет, это стрелочная функция!");
}
myFunction2()

let myObject = {
    myMethod: () => {         /* or function(){} */
        console.log("Привет, это метод объекта!");
    }
};
myObject.myMethod();


(function (){
    // console.log("Привет, это самовызывающаяся функция!");
})();


// ------------------------------------------------------------
/* setTimeout - делает через некоторое время
setTimeout(function, ms) */

/* setInterval - повторяет каждое данное время
setInterval(function, ms) 
чтобы остановить => setTimeout(setInterval(function(), ms), ms)*/




