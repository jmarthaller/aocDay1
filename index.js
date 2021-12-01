// get data 
let array = document.getElementsByTagName("pre")[0].innerText.split("\n").map(x => Number(x));

// part one
let increases = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i+1] > array2[i]) {
        increases++;
    }
}
console.log(increases)


// part two
let windowIncrease = 0;

for (let j = 0; j < array.length; j++) {
    let windowStart = array[j] + array[j+1] + array[j+2];
    let windowEnd = array[j+1] + array[j+2] + array[j+3]
    if (windowStart < windowEnd) {
        windowIncrease++;
    }
}
console.log(windowIncrease)