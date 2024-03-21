const getRandomChoice = (probabilities) => {
    const randomValue = Math.random();
    let cumulativeProbability = 0;
    for (const choice in probabilities) {
        cumulativeProbability += probabilities[choice];
        if (randomValue <= cumulativeProbability) {
            return choice;
        }
    }
}

const players = {
    first: {
        rock: 1/3,
        scissors: 1/6,
        paper: 1/6,
        well: 1/3
    },
    second: {
        rock: 1/4,
        scissors: 1/4,
        paper: 1/4,
        well: 1/4
    },
};

const game = {
    matrix: [
        [0, 1, -1, -1], 
        [-1, 0, 1, -1], 
        [1, -1, 0,  1], 
        [1,  1, -1, 0]
    ],
    index: {
        rock: 0,
        scissors: 1,
        paper: 2,
        well: 3
    }
}

const count = 1000;

let firstPlayerSum = 0;
for (let i = 0; i < count; i++) {
    const choices = {
        first: game.index[getRandomChoice(players.first)],
        second: game.index[getRandomChoice(players.second)]
    }
    firstPlayerSum += game.matrix[choices.first][choices.second]
    // if (firstPlayerSum >= 0) {
    //     console.log("+".repeat(firstPlayerSum))
    // } else {
    //     console.log("-".repeat(-1 * firstPlayerSum))
    // }
}
console.log(`First player average win, ${count} games: `, firstPlayerSum / count)