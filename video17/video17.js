function sum(a, b){
    return a + b;
}

console.log(sum(1, 2));

function fun(a, b, i){
    console.log('1');
    console.log('2');
    console.log('3');
    if(i == 5) return;
    console.log('4');
    console.log('5');
    return a + b;
}

console.log(fun(1, 2,3));
