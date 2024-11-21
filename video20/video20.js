//call back
let sum = (a, b, callback) => {
    let tong = a + b;
    callback(tong);
}

let printSum = (message) => {
    console.log('>> ',message);
}
sum(6, 9, printSum);

// setTimeOut : delay 5s then print
let sum1 = (a, b, callback1) => {
    let tong = a + b;
    setTimeout(() => {
        callback1(tong)
    }, 5000)
    
}
let printSum1 = (message) => {
    console.log('>> ',message);
}
sum1(6, 9, printSum1);

// setInterval
let sum2 = (a, b, callback2) => {
    let tong = a + b;
    let i = 0;
    let timer = setInterval(() => {
        callback2(tong);
        i++;
        if(i === 5){
            clearInterval(timer);
        }
    }, 1000)
    

    
}
let printSum2 = (message) => {
    console.log('>> ',message);
}
sum2(6, 9, printSum2);
