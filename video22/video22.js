let arr = [1, 2, 3, 4, 5]

// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * arr[i];
// }
// console.log(arr);

//======== Map ===========
let mapArr = arr.map((item, index) => {
    item = item * item;
    return item;
});
console.log(mapArr);
