// CLASS TOPICS: Data Type Assignment

// Answer 1
string = "hello".length;
console.log("String length " +string)
console.log('-------------------------')

// Answer 2

list = [1, 2, 3, 4]
firstItem = list[0];
lastItem = list[list.length - 1]
console.log(firstItem)
console.log(lastItem)
console.log('-------------------------')


// Answer 3
myObj = {"name":"abc", "list":[1,2,3]}
element = myObj.list[0]
console.log(element)
console.log('-------------------------')

// Answer 4
a = 3+1.5+10
console.log(typeof (a))
console.log('-------------------------')

// Answer 5
b = [1,2,3,[1,2,"name"]]
b[3][2] = "gender"
console.log(b)
console.log('-------------------------')

// Answer 6
c ={"name":"test",gender:23,"demo":[1,2,3,[1,2,3,"name"]]}
c.demo[3][3]="gender"
console.log(c)
console.log('-------------------------')

// Answer 7
d ={"a1":[{a2:["i am a string",["grab me"]]}]}
elementx = d.a1[0].a2[1][0]
console.log(elementx)
console.log('-------------------------')

// Answer 8
console.log(3.0 == 3)

// Answer 9
 x = [1,2,3,{"a":[{"age":24}]}] 
 y = {"age":[{"age":20}]} 
 age1 = x[3].a[0].age 
 age2 = y.age[0].age
 console.log(age1==age2);