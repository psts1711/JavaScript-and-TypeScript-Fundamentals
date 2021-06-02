// CLASS TOPICS: assingment on function

// Answer 1
list = [1,2,3,4,5,6,7,8]
function getEvenNumber(array)
{
    newList = []
    for(number of list)
    {
        if(number%2==0)
        {
            newList.push(number)
        }
    }
    return newList;
}
result = getEvenNumber(list)
console.log(result)
console.log('---------------')

// Answer 1 method 2
numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function getEvenOddNumber(array)
{
    newEvenList = []
    newOddList = []

    for(number of array)
    {
        if(number%2==0)
        {
            newEvenList.push(number)
        }
        else{
            newOddList.push(number)
        }
    }
    return [newEvenList, newOddList];
}
newResult = getEvenOddNumber(numberList)
console.log(newResult)
console.log('---------------')


// Answer 2
function isInRange(low, high, number)
{
    if(low<number &&  number > high)
    {
        return true
    }
    else
    {
        return false
    }
}
result2 = isInRange(0,10,11)
console.log(result2)
console.log('---------------')

// Answer 3
function getUpperAndLowerCaseInString(string)
{
    numOfUpperCase = 0;
    numOfLowerCase = 0;

    for(item of string)
    {
        if(item===item.toUpperCase())
        {
            numOfUpperCase += 1; 
        }
        else{
            numOfLowerCase += 1; 

        }
    }
    return {"lowercase":numOfLowerCase, "uppercase": numOfUpperCase}
}

result4 = getUpperAndLowerCaseInString("HelloWorld");
console.log(result4)
console.log('---------------')

// Answer 4
randomList = [1,2,3,4,5,1,2,3,4,5,7,8,7,4,2,3,4,6,7,8,9,2,1,2,3,4];
function getUniqueNumbers(numbers)
{
    newUniqueList = [];
    for(nItem of numbers)
    {
        if(!(nItem in newUniqueList))
        {
            newUniqueList.push(nItem)
        }
    }

    return newUniqueList;
}
// result5 = getUniqueNumbers(randomList);
result5 = [...new Set(randomList)]
console.log(result5)