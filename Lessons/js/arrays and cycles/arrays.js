// arrays and cycles with arrays

// ---------------------------------------------------------------
let arr = [] /* null array */

/* индексы начинаются с 0 */
/* здесь массивы могут хранить в себе различные форматы и даже смешанные */
/* здесь длина массива не фиксированная и можно добавлять */
/* методы как в джаве */
let arr2 = [1, 2, 3, 4, 5]

/* так мы можем вывести на страницу */
console.log('arr2 \n' + arr2)
 
/* method push() добавляет в конец */
arr.push(1) 
arr.push(2, 3) /* можно добавлять и несколько элементов */

/* method unshift() добавляет в начало */
arr.unshift(4, 5)

console.log('arr \n' + arr)

/* method pop() - удаляет последний элемент */
/* method shift() - удаляет первый элемент */

/* method slice(a, b) - скопировать и вставить, 
а - с какого индекса, b - до какого индекса*/
/* let arr = arr2.slice(1, 4) */

/* method spice(a, b) - вырезать и вставить,
а - с какого индекса, b - количество 
еще можно spice(a, b, 1, 2, 3, 4, 5 ...) - числа, 
это элементы которые можно встаить вместо вырезанных */
/* let arr = arr2.spice(1, 3, 'a', 'av') */

/* method concat() - joins two arrays */
/* let a = arr.concat(arr2) */

/* toString() - чисто элементы с запятыми */

/* arr = [... new Set(arr)]  удаляет повторяющиеся*/

/* let arr2 = [...arr] copies array */

/* map() to copy array
let arr2 = arr.map((item, index) => {return item} )
let arr2 = arr.map(item => item * 2 )    returns array lengths of original
*/

/*  filter()
let arr2 = arr.filter((item, index) => item > 0)
let arr2 = arr.map(item => item > 0 )  return item which is true for if
*/

/* every()
let bool = arr.every((index, item) => item < 0) checks for every and returns true or false
*/

/* some()
let bool = arr.some((index, item) => item < 0) checks for any and returns true or false
*/

