/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
    if (!Number.isInteger(n) || n < 0)
        return 'Входной параметр должен быть неотрицательным целым числом.';    
    let count = 0;    
    for (let i = 9; i <= n; i++){
        count += countZerosInNumber(i);
    }
    return count;
}

function countZerosInNumber(n){    
    const isZeroLastDigit = n % 10 === 0 ? 1 : 0;
    return n / 10 < 10  
        ? isZeroLastDigit
        : isZeroLastDigit + countZerosInNumber(Math.floor(n / 10));    
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100