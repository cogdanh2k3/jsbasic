console.log('Hello World');

//key: value 
let obj = {
    name: 'Danh', address: 'Viet Nam',
    // a: function(){
    //     console.log('Hello World inside function');
    //     return ''
    // }
};

//JSON
// "{name : 'Eric', address: 'Ha Noi'}"

let b = "Danh"
 
obj.b = 'Ali' // Add b: Ali
console.log('type of obj: ',typeof obj, 'type of b: ',typeof b);
console.log(`What is ur name? `, `My name's: `, obj.name);
console.log(`Where are u from? `, `I'm from: `, obj.address);
console.log(`What is ur name? `, `My name's: `, obj['name']);
console.log(`Where are u from? `, `I'm from: `, obj['address']);

