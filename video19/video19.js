// function and method => reuse
let obj = {
    name: 'Danh',
    age: 21,
    getName: function(){
        return this.name;
    }
}

console.log(obj.getName());

// let obj = {
//     name: 'Danh',
//     age: 21,
//     getName: () => {
//         return this.name;
//     }
// }

// console.log(obj.getName());

