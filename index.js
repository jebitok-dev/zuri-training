function convertFahrToCelsius(fahrenheit) {
    let celsius = (fahrenheit -32) * (5 / 9);
    return celsius;
}

console.log(convertFahrToCelsius(0)); //-17.77777777777778
console.log(convertFahrToCelsius([1, 2, 3])); //NaN
console.log(convertFahrToCelsius("0"));//-17.77777777777778
console.log(convertFahrToCelsius({ temp: 0 })); //NaN

// Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

// Note:

// - for numbers that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"

const checkYuGiOh = (n, arr = []) => {
    if (n === 1) {
        arr.push('1');
        return arr.reverse();
    } else {
        if (n % 2 == 0 && n % 3 == 0 && n % 5 == 0) {
            arr.push("yu-gi-oh");
        } else if (n % 2 == 0) {
            arr.push("yu");
        } else if (n % 3 == 0) {
            arr.push("gi");
        } else if (n % 5 == 0) {
            arr.push("oh")
        } else {
            arr.push('' + n);
        }
        return checkYuGiOh(n - 1, arr);
    }
}
console.log(checkYuGiOh(10)); //['1',  'yu', 'gi','yu', 'oh', 'yu','7',  'yu', 'gi','yu']
console.log(checkYuGiOh("5"));//[ '1', 'yu', 'gi', 'yu', 'oh' ]
// console.log(checkYuGiOh("fizzbuzz is meh"));