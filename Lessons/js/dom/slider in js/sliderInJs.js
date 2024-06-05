let src = ['../../../extra/image/Фон глаза.jpg',
'../../../extra/image/Tate.jpg', '../../../extra/image/telegram.png']

let num = 0;

let img = document.getElementById('image')
img.src = src[0]

function changeImg(arg){
    num = (num + arg + src.length) % src.length
    img.src = src[num]
}


