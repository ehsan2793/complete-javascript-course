'use strict';
const measurementInKelvin = (array) => {
    let x = '';
    for (let i = 0; i < array.length; i++) {
        x += `day ${i + 1} the temperature was ${array[i]} ...`
    }

    return x
};

console.log('...', measurementInKelvin([11, 22, 33, 44, 55]));
