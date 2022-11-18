// /---Task1---/

// var str = prompt();
// var reversed='';
// for (let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
// }
// console.log(reversed);

// /---Task2---/

// let str = prompt();
// var reversed = str.split(' ').reverse();
// var a = reversed.join(' ');
// console.log(a);

// /---Task3---/
// let num = +prompt('Eded daxil edin:');
// let array = [];
// let n=0
// for (let i = 100; i < 1000; i++){
//     if (i % num == 0) {
//         array[n] = i;
//         n++;
//     }
// }

// if (array.length == 0) {
//     console.log('Bu eded hec bir ucreqemli ededin boleni deyil ');
// }
// else {
//     console.log('Daxil etdiyiniz ededin 3 reqemli bolunenleri: ');
//     for (let i = 0; i < n; i++){
//         console.log(array[i]);
//     }
// }

// /---Task4---/
// let num = +prompt('Eded daxil edin:');
// if (Math.round(num) == num) {
//     console.log(`${num} ededi tam ededdir.`);
// }
// else {
//     console.log(`${num} ededi tam eded deyil.`);
// }