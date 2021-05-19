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

const checkYuGiOh = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            console.log("yu-gi-oh");
        } else if (i % 2 == 0) {
            console.log("yu");
        } else if (i % 3 == 0) {
            console.log("gi");
        } else if (i % 5 == 0) {
            console.log("oh")
        } else {
            console.log(i);
        }
    }
}
console.log(checkYuGiOh(10));