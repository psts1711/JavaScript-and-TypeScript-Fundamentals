// Recursive Function

let count = 0;

function countTillNumber(number)
{
    if(count > number)
    {
        return
    }
    console.log('count is: ' +count)
    count++;
    countTillNumber(number);
}



countTillNumber(10)

