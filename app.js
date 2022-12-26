// Generate random sorted unique set numbers of array.
const randomArray = Array.from({length: 20}, () => Math.floor(Math.random() * 40));
const uniq = [...new Set(randomArray)];
const sortArray = (array) => array.sort((a, b) => a - b);
const sortedArray = sortArray(uniq);
console.log(sortedArray)