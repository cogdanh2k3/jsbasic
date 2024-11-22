// ====== Reduce ======
// reduce method executes a user supplied 'reducer' callback

let arr = [1, 2, 3, 4, 5];
let reducer = (accumulator, currValue) => accumulator + currValue;

console.log(arr.reduce(reducer));

console.log(arr.reduce(reducer, 5));
