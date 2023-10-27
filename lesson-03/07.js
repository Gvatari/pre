const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

for (let i = 0; i < numbers.length; i++) {
    for (let j = numbers[i].length - 1; j >= 0; j--) {
        if (numbers[i][j] % 2 === 1) {
            numbers[i].splice(j, 1);
        }
    }
}

console.log(numbers);