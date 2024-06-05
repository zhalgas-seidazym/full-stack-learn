let items = document.querySelectorAll('.item')

items.forEach(item => {
    item.innerHTML = 0
    let num = item.getAttribute('data-num')
    let plus = num/30
    function increase(){
        let value = +item.innerHTML
        if(num > value){
            value+= plus;
            value = Math.round(value)
            item.innerHTML = value
            setTimeout(increase, 100)
        }
        else {
            item.innerHTML = num
        }
    }
    increase()
});