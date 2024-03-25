const getRandomValue = (size = 1) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        let randomValue = Math.random();
        while (randomValue == 1 || randomValue == 0) {
            randomValue = Math.random();
        }
        array.push(randomValue);
    }
    return array;
}

const sum = (array = []) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    return sum;
}

const summation = () => {
    let omega = sum(getRandomValue(12));
    console.log(omega - 6);
}

summation();