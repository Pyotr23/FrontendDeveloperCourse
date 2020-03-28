/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {    
    if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length !== str2.length)
        return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1 === str2)
        return false;
    str1 = sortString(str1);
    str2 = sortString(str2);
    return str1 === str2;
}

function sortString(string){
    return string.split('').sort().join('');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false