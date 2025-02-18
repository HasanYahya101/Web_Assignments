function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function processArray(arr, callback) {
    console.log("Original array:", arr);

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const numbers = [10, 5, 8, 2, 6];

console.log("Double values:", processArray(numbers, double));
console.log("Square values:", processArray(numbers, square));