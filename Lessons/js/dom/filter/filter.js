let vewi = [
    {
        type: 'kurtka',
        src: '../../../../extra/image/Tate.jpg'
    },
    {
        type: 'obuv',
        src: '../../../../extra/image/Фон глаза.jpg'
    },
    {
        type: 'noski',
        src: '../../../../extra/image/telegram.png'
    }
]
vewi = [...new Set(vewi)]

let bodyContent = document.getElementById('body-content')
let topContent = document.getElementById('top-content')
let btn = '<button class="btn-item" onClick="btnClick(this)">vse</button>'

for(let vew of vewi){
    btn += `<button class="btn-item" onClick="btnClick(this)">${vew.type}</button>`
}

topContent.innerHTML = btn

function btnClick(arg){
    let str = arg.innerHTML
    console.log(str)
    setOdejdy(str)
}

function setOdejdy(str){
    let items = ''
    if(str == 'vse'){
        vewi.forEach(vew => {
            items += `<div class="body-items">
                        <img src="${vew.src}" alt="" class="img">
                        <h3 class="item-text">${vew.type}</h3>
                    </div>`
            
        })
    }
    else {
        for(let vew of vewi){
            if(vew.type == str){
                items += `<div class="body-items">
                            <img src="${vew.src}" alt="" class="img">
                            <h3 class="item-text">${vew.type}</h3>
                        </div>`
            }
        }
    }
    bodyContent.innerHTML = items
}




