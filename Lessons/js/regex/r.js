 // Регулярные выражения
// const regex1 = /Decode/  // Создает регулярное выражение, которое ищет 'Decode'
// const regex2 = new RegExp('Decode')  // Альтернативный способ создания регулярного выражения, которое ищет 'Decode'

// console.log(regex1.test('Decode - школа программирования')) // true - 'Decode' найдено в строке
// console.log(regex1.test('decode - школа программирования')) // false - регистр букв не совпадает
// console.log(regex2.test('школа программирования')) // false - 'Decode' не найдено в строке
// console.log(regex2.test('Decodee - школа программирования')) // true - 'Decode' найдено в начале строки

// let str = 'Строка, в которой    тупой    беспорядок'  // Исходная строка с несколькими пробелами
// console.log(str)  // Выводит исходную строку
// let str1 = str.replace(/\s+/g, ' ')  // Заменяет несколько пробелов на один
// console.log(str1)  // Выводит строку с одним пробелом между словами

// const regex3 = /De{1,2}code/  // Создает регулярное выражение, которое ищет 'D' за которым следует 'e' повторенное 1 или 2 раза, затем 'code'

// console.log(regex3.test('Decode - школа программирования')) // true - 'Decode' соответствует шаблону (одна 'e')
// console.log(regex3.test('Deecode - школа программирования')) // true - 'Deecode' соответствует шаблону (две 'e')
// console.log(regex3.test('Deeecode - школа программирования')) // false - 'Deeecode' не соответствует шаблону (три 'e')
// console.log(regex3.test('Deeeecode - школа программирования')) // false - 'Deeeecode' не соответствует шаблону (четыре 'e')

// const regex4 = /De*code/  // De{0,}code Создает регулярное выражение, которое ищет 'D' за которым следует 'e' повторенное 0 или более раз, затем 'code'

// console.log(regex4.test('Decode - школа программирования')) // true - 'Decode' соответствует шаблону (одна 'e')
// console.log(regex4.test('Deecode - школа программирования')) // true - 'Deecode' соответствует шаблону (две 'e')
// console.log(regex4.test('Deeecode - школа программирования')) // true - 'Deeecode' соответствует шаблону (три 'e')
// console.log(regex4.test('Deeeecode - школа программирования')) // true - 'Deeeecode' соответствует шаблону (четыре 'e')

// const regex5 = /De+code/  // Создает регулярное выражение, которое ищет 'D' за которым следует одна или более 'e', затем 'code'

// console.log(regex5.test('Decode - школа программирования')) // true - 'Decode' соответствует шаблону (одна 'e')
// console.log(regex5.test('Deecode - школа программирования')) // true - 'Deecode' соответствует шаблону (две 'e')
// console.log(regex5.test('Deeecode - школа программирования')) // true - 'Deeecode' соответствует шаблону (три 'e')
// console.log(regex5.test('Dcode - школа программирования')) // false - 'Dcode' не соответствует шаблону (нет 'e')

// const regex6 = /De?code/  // De{0,1}code Создает регулярное выражение, которое ищет 'D' за которым следует 0 или 1 'e', затем 'code'

// console.log(regex6.test('Decode - школа программирования')) // true - 'Decode' соответствует шаблону (одна 'e')
// console.log(regex6.test('Deecode - школа программирования')) // true - 'Deecode' соответствует шаблону (две 'e')
// console.log(regex6.test('Dcode - школа программирования')) // true - 'Dcode' соответствует шаблону (нет 'e')
// console.log(regex6.test('Deeecode - школа программирования')) // false - 'Deeecode' не соответствует шаблону (три 'e')

// \s - любой пробельный символ, перенос строки, табуляция
// \S - любой непробельный символ

// \d - цифры от 0 до 9
// \D - не цифра

// \w - A-Z, a-z, 0-9, _
// \W - не (A-Z, a-z, 0-9, _)

// let regex7 = /[123qweA-Z]/  // Создает регулярное выражение, которое ищет любой из символов: '1', '2', '3', 'q', 'w', 'e', 'A-Z'

// console.log(regex7.test('123qweA')) // true - '123qweA' содержит один из символов из набора
// console.log(regex7.test('23qweA')) // true - '23qweA' содержит один из символов из набора
// console.log(regex7.test('qweA')) // true - 'qweA' содержит один из символов из набора
// console.log(regex7.test('A')) // true - 'A' содержится в наборе символов
// console.log(regex7.test('5')) // false - '5' не содержится в наборе символов

// let regex8 = /[^123qweA-Z]/  // Создает регулярное выражение, которое ищет любой символ, кроме: '1', '2', '3', 'q', 'w', 'e', 'A-Z'

// console.log(regex8.test('123qweA')) // false - '123qweA' содержит только символы из набора
// console.log(regex8.test('23qweA')) // false - '23qweA' содержит только символы из набора
// console.log(regex8.test('qwaE')) // true - 'qwaE' содержит символы, которые не входят в набор
// console.log(regex8.test('A')) // false - 'A' содержится в наборе символов
// console.log(regex8.test('5')) // true - '5' не содержится в наборе символов

// let regex9 = /^[0-9 (.)]+$/  // Создает регулярное выражение, которое ищет строки, содержащие только цифры, пробелы, круглые скобки и точки

// console.log(regex9.test('3 (. .)')) // true - строка соответствует шаблону
// console.log(regex9.test('1 ( .)')) // true - строка соответствует шаблону
// console.log(regex9.test('3 ( . ) ')) // true - строка соответствует шаблону
// console.log(regex9.test('qwe1 (. .)')) // false - строка содержит символы, которые не входят в набор
// console.log(regex9.test('1 qwe) (. .)')) // false - строка содержит символы, которые не входят в набор

// let regex10 = /\.js$/  // Создает регулярное выражение, которое ищет строки, оканчивающиеся на '.js'

// console.log(regex10.test('a.js')) // true - строка соответствует шаблону (оканчивается на '.js')
// console.log(regex10.test('b.js')) // true - строка соответствует шаблону (оканчивается на '.js')
// console.log(regex10.test('.js')) // true - строка соответствует шаблону (оканчивается на '.js')
// console.log(regex10.test('js.js')) // true - строка соответствует шаблону (оканчивается на '.js')
// console.log(regex10.test('.js as')) // false - строка не оканчивается на '.js'

// let regex12 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i
// // Создает регулярное выражение, которое ищет строки, похожие на email
// // [a-z0-9._%+-]+  - одна или более букв, цифр, точек, знаков подчеркивания, процентов, плюсов или минусов
// // @               - символ @
// // [a-z0-9.-]+     - одна или более букв, цифр, точек или дефисов
// // \.              - символ точки
// // [a-z]{2,4}      - от двух до четырёх букв
// // i               - флаг регистра независимости (игнорирует регистр)

// console.log(regex12.test('asd_1@asd.asd')) // true - строка соответствует шаблону email
// console.log(regex12.test('ASD-1@asd.asd')) // true - строка соответствует шаблону email (игнорирует регистр)
// console.log(regex12.test('asd@mailru'))    // false - отсутствует точка перед доменом верхнего уровня
// console.log(regex12.test('@mail.ru'))      // false - отсутствует часть перед @

// let regex13 = /\.(png|jpeg|jpg|svg)$/i
// Создает регулярное выражение, которое ищет строки, заканчивающиеся на '.png', '.jpeg', '.jpg' или '.svg'
// \.        - символ точки
// (png|jpeg|jpg|svg) - одна из строк: 'png', 'jpeg', 'jpg', 'svg'
// $         - конец строки
// i         - флаг регистра независимости (игнорирует регистр)

// console.log(regex13.test('1.jpeg'))  // true - строка заканчивается на '.jpeg'
// console.log(regex13.test('1.png'))   // true - строка заканчивается на '.png'
// console.log(regex13.test('1.svg'))   // true - строка заканчивается на '.svg'
// console.log(regex13.test('1.jpg'))   // true - строка заканчивается на '.jpg'
// console.log(regex13.test('1.ru'))    // false - строка не заканчивается на одно из перечисленных расширений
