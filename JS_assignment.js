'use strict';

//1. Perfect Number.problem

//Function to find the factors of a number
const getFactors = (num) => {
    let i = 1;
    const factors = [];
    while (i * i < num) {
        if (num % i === 0) {
            factors.push(i);
        }
        if (num / i != i && num / i != num) {
            factors.push(num / i);
        }
        i++;
    }
    return factors;
}

//Function to evaluate the number.
const perfectNumber = (value) => {
    const factors = getFactors(value);
    const sum = factors.reduce((prev, curr) => prev + curr);
    if (sum === value) {
        return 'Perfect';
    }
    return sum > value ? 'Abundant' : 'Deficient';
}

console.log(perfectNumber(8))

// 2 How many trails 1

const countSteps = (num) => {
    //To correct for negative cases. 
    num = Math.abs(num);
    let count = 0;
    while (num != 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        count++;
    }
    return count;
}

console.log(countSteps(8))

//3. Greater than and less than in a matrix.
const row = 3
const col = 3;
const matrix = [
    [1, -1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

const checkMatrix = (row, col, matrix) => {
    const elements = [];
    const rowMax = [];
    for (let i = 0; i < row; i++) {
        let max = Number.NEGATIVE_INFINITY;
        let maxIndex = null;
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
                maxIndex = j
            }
        }
        rowMax.push(maxIndex);
    }
    let flag = 0;
    for (var i = 0; i < row; i++) {
        flag = 0;
        for (var j = 0; j < row; j++) {
            if (matrix[i][rowMax[i]] > matrix[j][rowMax[i]]) {
                flag = 1;
                break;
            }
        }
        if (flag != 1) {
            elements.push(matrix[i][rowMax[i]]);
        }

    }
    return elements;
}

console.log(checkMatrix(row, col, matrix));

//4. Catch the fish

const fishCatch = (k, l, m, n, total) => {
    let diff = 1;
    if (k <= 0 || l <= 0 || m <= 0 || n <= 0 || total <= 0) {
        return "Cannot Catch the fish";
    }
    if (k === 1 || l === 1 || m === 1 || n === 1) {
        diff = 0;
    }
    return Math.abs(total - total + diff - parseInt(total / k, 10) - parseInt(total / l, 10) -
        parseInt(total / m, 10) - parseInt(total / n, 10) + parseInt(total / (k * l), 10) + parseInt(total / (k * m), 10) +
        parseInt(total / (k * n), 10) + parseInt(total / (l * m), 10) + parseInt(total / (l * n), 10) + parseInt(total / (m * n), 10) -
        parseInt(total / (k * l * m), 10) - parseInt(total / (k * l * n), 10) - parseInt(total / (k * n * m), 10) - parseInt(total / (l * m * n), 10) +
        parseInt(total / (k * m * n * l), 10));
}

console.log(fishCatch(2, 3, 4, 5, 24));