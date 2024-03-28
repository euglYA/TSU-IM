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

const summation = (a, sigma) => {
    let w = sum(getRandomValue(12)) - 6;
    let n = w - 41 / (13440 * 12 ** 2) * (w ** 5 - 10 * w ** 3 + 15 * w);
    return a + sigma * n;
}

const func = () => {
    let params = {
        size: 100,
        a: 2,
        sigma: 1
    }
    let arr = [];
    
    for (let i = 0; i < params.size; i++) {
        arr.push(summation(params.a, params.sigma))
    }
    
    console.log(arr)

}

/*
viewof size = Inputs.range([100, 10000], {step: 100, label: "size"})
viewof a = Inputs.range([0, 10], {step: 0.5, label: "a"})
viewof sigma = Inputs.range([0.1, 10], {step: 0.5, label: "sigma"})

mean = data.reduce((acc, cur) => acc + cur, 0) / size;
deviation = Math.sqrt(data.reduce((acc, cur) => acc + (cur - mean) ** 2, 0) / size);
sigmaF = (k) => data.filter(val => Math.abs(val - a) < k * deviation).length / size;

sigmaRule = (arr) => {
    const standardDeviation = Math.sqrt(deviation);;
    
    const lowerBound = mean - 3 * standardDeviation;
    const upperBound = mean + 3 * standardDeviation;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowerBound || arr[i] > upperBound) {
            return {result: false, lowerBound, upperBound, value: arr[i]};
        }
    }
    
    return {result: true, lowerBound, upperBound};
}

*/