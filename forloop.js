// CLASS TOPICS: for loop statement

list = [1,2,3,4,5,6]

// newList = [1,4,9,16,25,36] output
newList = []
for(item in list)
{
  //  console.log(list[item]) // return list index number

   newList.push(list[item] * list[item])
   newList.push(item * item)
}
console.log(newList)
console.log('---------Method 1 End------------')


/* Mthod 2 */
list2 = [1,2,3,4,5,6]
newList2 = []
for(let i= 1; i<=list2.length; i++)
{
   // console.log(i) // return list index number
   newList2.push(i * i)
}
console.log(newList2)
console.log('---------Method 2 End------------')


/* Mthod 3 check even or odd number */
list3 = [1,2,3,4,5,6,7,8,9,10]
for(number in list3)
{
    if(number % 2===0)
    {
        console.log('Number is even', number)
    }
    else
    {
        console.log('Number is odd', number)

    }
}

console.log('---------Method 3 End------------')


a = 5;
a += 2;
console.log(a);