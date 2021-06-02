
const range = (start, end) => {
const length = end - start;
return Array.from({ length }, (_, i) => start + i);
}
//console.log(range(0,15));

// Answer 1
a = [1,2,3,4,5]
for(number of a)
{
    if(number % 2==0)
    {
        console.log('Number is even ',number);
    }
    else
    {
        console.log('Number is odd ',number);

    }
}
console.log('---------End Answer 1---------');

// Answer 2
b = [1,2,3,4,5,6]
myEvenList = []
myEvenSquare = []
for(number of b)
{
    if(number % 2 ==0)
    {
       // console.log('Number is even ', number)
        myEvenList.push(number)
        myEvenSquare.push(number*number)

    }
}
console.log('Number is new even array ', myEvenList)
console.log('Number is even square array ', myEvenSquare)
console.log('---------End Answer 2---------');

// Answer 3
myList = range(1,50)
for(number of myList)
{
    if(number % 3 == 0 && number % 5 == 0)
    {
        console.log('heha', number)
    }
    else if(number % 3==0)
    {
        console.log('haha', number)
    }
    else if(number % 5==0)
    {
        console.log('hehe', number)
    }
    else
    {
        console.log(number)
    }
}
console.log('---------End Answer 3---------');

// Answer 4
myNewList = range(1,50)
for(number of myNewList)
{
  if(number==30)
    {
        break;
    }
    else if(number>10)
    {
        console.log('Number is ', number);
    }
}
console.log('---------End Answer 4---------');

// Answer 5 with forloop
myNum = range(0,11)
sum = 0;
for(newNumber of myNum)
{
    sum += newNumber
}
console.log("Average: ", sum/myNum.length);
console.log('---------End Answer 5---------');

// Answer 6 with forloop
myNumber = range(0,20)
myNewNumberEven = []
myNewNumberOdd = []
for(nNumber of myNumber)
{
    if(nNumber % 2 == 0)
    {
        myNewNumberEven.push(nNumber*nNumber)
    }
    else if (nNumber % 2 != 0)
    {
        myNewNumberOdd.push(nNumber*nNumber)
    }
}
console.log("My Even Number List", myNewNumberEven);
console.log("My Odd Number List", myNewNumberOdd);
console.log('---------End Answer 6---------');

// Answer 7 
length = 10;
breath = 10;
if(length != breath)
{
    console.log('It is rectangle');
}
else
{
    console.log('It is square');
}
console.log('---------End Answer 7---------');

// Answer 8
studentMarks = 66;
if(studentMarks<25)
{
    console.log('You got Grade F')
}
else if(25<=studentMarks && studentMarks < 45)
{
    console.log('You got Grade E')
}
else if(45<=studentMarks && studentMarks < 50)
{
    console.log('You got Grade D')
}
else if(50<=studentMarks && studentMarks < 60)
{
    console.log('You got Grade C')
}
else if(60<=studentMarks && studentMarks < 80)
{
    console.log('You got Grade B')
}
else
{
    console.log('You got Grade A')
}
console.log('---------End Answer 8---------');


// Answer 9
totalClasses = 50;
noOfClassAttendedByStudent = 40;
percentageOfAttendance = (noOfClassAttendedByStudent/totalClasses)*100;
//console.log(percentageOfAttendance)
if(noOfClassAttendedByStudent > totalClasses)
{
    console.log('Hey, you are laying')
}
else if(percentageOfAttendance > 75)
{
  console.log('Yes, you are eligible for exam')
}
else
{
  console.log('You are not eligible for exam')
}