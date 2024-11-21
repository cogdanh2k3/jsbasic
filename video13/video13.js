let arr = ['Man City', 'Mu', 'Liverpool', 'Chelsea'];

let i = 0;
while(i < arr.length){
    if(arr[i].length === 2){
        console.log('Top club: ', arr[i]);
    }else if(arr[i].length === 4){
        console.log('Top club: ', arr[i]);
    }
    i++;
}

let j = 0
while(j < arr.length){
    if(arr[j] === 'Chelsea'){
        console.log(arr[j]);
        break;
    }
    j++;
}
