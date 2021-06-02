// advance recusive function real use
// array shorting
/*
 [1,4,5,6,2]
 [1,4,5,2,6]
 [1,4,2,5,6]
 [1,2,4,5,6]
*/

// [0,1,2,3,4,5,6,7,8,9]
let myArray = [2,4,5,6,1,7,8,9,0,3]
let i=0;
let j=1;

let myShortedArray = []

function isArrayShorted(array)
{
    for(let i = 0;i<array.length; i++)
    {
       if(array[i]>array[i+1])
       {
        return false;
       }
    }
    return true;
}

function shortArray(array) {
    if(isArrayShorted(array))
    {
        myShortedArray = array;
        return;
    }
    else if(array[i] < array[j])
    {
        i++;
        j++;
        shortArray(array);
    }
    else{
        [array[i],array[j]] = [array[j],array[i]]
        i=0;
        j=1;
        shortArray(array)
    }
}

let result = shortArray(myArray);

console.log(myShortedArray)