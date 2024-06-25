// ES6

// how to get from arrays elements

let arr = [1, 2, 3, 4]

let [first, second, ...others] = arr

// first = 1, second = 2, others = [3, 4]


// also we can use it in objects

let obj = {
    name: 'Zhalgas',
    age: 18
}

let {name} = obj

// here we can use just name = 'Zhalgas'