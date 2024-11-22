// let arr = [1,2,3,4,5,6,7,8,9,10]

let arr = [
    {name : 'Danh', age: 21},
    {name : 'Dan', age: 25},
    {name : 'Da', age: 23},
    {name : 'D', age: 24},
    {name : 'Dd', age: 25},
]
//======= Filter Method ======

// let filter = arr.filter((item, index) => {
//     // console.log('>>> item: ', item, 'index: ', index);  
//     return item && item > 5;
// });



let filter2 = arr.filter((item, index) => {
    return item && item.age == 25;
});
console.log(filter2);

//========= Find method ========
//return item (if not -> return undefined)

let find1 = arr.find((item, index) => {
    return item && item.age == 25;
});
console.log(find1);