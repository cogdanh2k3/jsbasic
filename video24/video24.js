// ===== Sort =======
// The sort() method sorts the elements of an array in place and return the sorted array
// default: ascending

let arr = [1, 30, 4, 21, 10000];
arr.sort((a, b) => {
    console.log(a, b);
    return a - b;
});
console.log(arr);
