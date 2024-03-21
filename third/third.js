const getRandomValue = () => {
    let randomValue = Math.random();
    while (randomValue == 1 || randomValue == 0) {
        randomValue = Math.random();
    }
    return randomValue;
}


const getRandomChoice = (probabilities) => {
    const randomValue = getRandomValue();
    let cumulativeProbability = 0;
    for (const choice in probabilities) {
        cumulativeProbability += probabilities[choice];
        if (randomValue <= cumulativeProbability) {
            return {choice, randomValue};
        }
    }
}

function mean(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum / data.length;
}

function variance(data) {
    const n = data.length;
    const mean = data.reduce((acc, val) => acc + val, 0) / n;
    
    const sumSquaredDifferences = data.reduce((acc, val) => acc + (val - mean) ** 2, 0);
    
    return sumSquaredDifferences / (n - 1);
}


let probabilities = {
    0: 0.89,
    1: 0.11
};

const superposition = () => {
    let ksi = getRandomChoice(probabilities)
    if (ksi.choice == 0) {
        return (1 - (1 / ksi.randomValue))
    } else {
        return (1 - Math.log(1 - ksi.randomValue)) ** (-1/3)
    }
}

let values = []

for (let i = 0; i < 1000; i++) {
    values.push(superposition());
}

console.log(mean(values));
console.log(variance(values));

