const getRandomArray = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.random())
    }
    return arr;
}

const checkRandomArray = (array) => {
    let N = array.length;
    let k = Math.floor(1 + 3.3 * Math.log(N));
    const tableValue = 17.275;
    let chiSquare = 0;
    
    let R = [];
    for (let i = 0; i < k; i++) R.push(0);

    for (let i = 0; i < N; i++) {
        let index = Math.floor(k * array[i]);
        R[index]++;
    }

    for (let i = 0; i < k; i++) {
        chiSquare += (((R[i] - N/k) ** 2) / (N/k))
    }
    
    console.log("Array: ", array)
    console.log("R: ", R)
    console.log("k: ", k)
    console.log("Alpha: ", 0.1);
    console.log("Freedom: ", k-1);
    console.log("Table value: ", tableValue)
    console.log("Chi-square: ", chiSquare)
    
    return tableValue >= chiSquare;
}

console.log(checkRandomArray(getRandomArray(35)));