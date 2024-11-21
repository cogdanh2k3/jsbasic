let arr = ['Man City', 'Mu', 'Liverpool', 'Chelsea'];

// for(let i = 0; i < arr.length; i++){
//     console.log('Top: ', i + 1, arr[i]);
// }

let i = 0;
while(i < arr.length){
    console.log('Top ', i + 1, arr[i]);
    i++; 
}

let j = 0
do{
    console.log('Top ', j + 1 , arr[j]);
    j++;
}while(j < arr.length);