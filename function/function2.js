// CLASS TOPICS: Map, Filter and Arrow functions

/* Map Function */

myList = [1,2,3,4,5].map(function (value){
    // print all value one by one
    console.log(value);
});
console.log('-----------------');

// new array output is [1, 4, 9, 16, 25]
myList2 = [1,2,3,4,5].map(function (value2){
    return value2 * value2;
});
console.log(myList2);
console.log('-----------------');


/* Filter Function, filter return new list*/
myList = [
            {
               eid:1, ename:"prafful", 
               eage:27, 
               email:"abcd@gmail.com"
            },
            {
                eid:2, 
                ename:"Sweta", 
                eage:28, 
                email:"sweta@gmail.com"
             },
             {
                eid:3,
                ename:"Avantika", 
                eage:32, 
                email:"avantika32@gmail.com"
             }
         ];

myFilterList = myList.filter(function(data){
    // if(data.age>25)
    // {
    //     return true
    // }
    // else{
    //     return false
    // }

    return data.eage >25
});
console.log(myFilterList)
console.log('-----------------');


/* square program using map and function */
function square(number)
{
    return number * number
}
myList = [1,2,3,4,5].map(square);
console.log(myList)


/* square program using map and arrow function */
myList3 = [1,2,3,4,5].map((data)=>{
    return data*data
});
console.log(myList3)