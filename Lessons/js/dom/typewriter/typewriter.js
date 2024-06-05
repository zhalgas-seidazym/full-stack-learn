let words = ['Web Developer', 'FullStack Developer', 'Backender']

let textPlace = document.getElementById('output')

let numWord = 0
let numChar = 0

printWord()

function printWord(){
    if(words[numWord].length > numChar){
        textPlace.innerHTML = words[numWord].substr(0, numChar)
        numChar++
        setTimeout(printWord, 200)
    }
    else{
        deleteWord()
    }
}

function deleteWord(){
    if(numChar >= 0){
        textPlace.innerHTML = words[numWord].substr(0, numChar)
        numChar--
        setTimeout(deleteWord, 100)
    }
    else{
        numWord = (numWord + 1) % words.length
        numChar = 0
        printWord()
    }
}