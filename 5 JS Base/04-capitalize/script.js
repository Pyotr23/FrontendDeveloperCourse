/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (typeof str !== 'string' )
        return 'Входной параметр не является строкой.';
    let isFirst = true;
    return str.split('').map(function(char){        
        if (isFirst && isLetter(char)){              
            isFirst = !isFirst;
            return char.toUpperCase();
        }            
        isFirst = !isLetter(char);                
        return char;                
        }).join('');   
}

function isLetter(char){
    return char.toUpperCase() !== char.toLowerCase();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"