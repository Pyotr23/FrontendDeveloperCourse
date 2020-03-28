/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {    
    if (!Number.isInteger(num) || num < 1){
        console.log(`${num} не является целым числом больше 0.`)
        return;
    }
    for (let i = 1; i <= num; i++){
        if (i % 15 === 0)
            console.log('fizzbuzz');
        else if (i % 3 === 0)
            console.log('fizz');
        else if (i % 5 === 0)
            console.log('buzz');
        else
            console.log(i);
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));