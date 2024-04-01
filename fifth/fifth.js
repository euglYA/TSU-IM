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

const stochasticProcess = (data, T) => {
    let lambda = data.lambda;
    let q = data.q;
    let state = getRandomValue() < data.alpha[0] ? 0 : 1;
    let time = 0;
    let totalTimeState = {
        0: 0,
        1: 0
    };

    while (time < T) {
        // let lambda = state === 0 ? data.lambda[0] : data.lambda[1];
        // let alpha = state === 0 ? data.alpha[0] : data.alpha[1];

        // let deltaTime = -Math.log(getRandomValue()) / lambda;
        // time += deltaTime;

        // if (time < T) {
        //     if (state === 0) {
        //         totalTimeState0 += deltaTime;
        //     } else {
        //         totalTimeState1 += deltaTime;
        //     }

        //     state = getRandomValue() < alpha ? 1 - state : state;
        // }
        let occurrenceTime = -Math.log(getRandomValue()) / lambda[state];
        let transitionTime = Math.log(getRandomValue()) / q[state][state];

        if (occurrenceTime < transitionTime) {
            time += occurrenceTime;
            totalTimeState[state] += occurrenceTime;
        } else {
            time += transitionTime;
            totalTimeState[state] += transitionTime;
            state = state === 0 ? 1 : 0;
        }
    }
    let p = {
        0: totalTimeState[0] / T,
        1: totalTimeState[1] / T
    }
    return p;
}

const data = {
    lambda: {
        0: 0.5,
        1: 0.7
    },
    alpha: {
        0: 0.8,
        1: 0.2
    },
    q: [
        [-0.8, 0.8],
        [0.2, -0.2]
    ]
}

const T = 1000;

const p = stochasticProcess(data, T);
console.log(`Оценка вероятности состояния 0: ${p[0]}`);
console.log(`Оценка вероятности состояния 1: ${p[1]}`);