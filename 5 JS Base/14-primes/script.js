/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    const primes = [];
    for (let i = 2; i <= num; i++){
        if (isPrime(i)){
            primes.push(i);            
        }
    }
    return primes;
}

function isPrime(n) {  
    if (!Number.isInteger(n))
        return 'Входной параметр должен быть целым числом';  
    if (n <= 1) 
        return false;   
    if (n === 2)
        return true;
    if (n % 2 == 0)
        return false;
    for (let i = 3; i < n; i += 2){
        if (n % i == 0)
            return false;
    }
    return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]