// CLASS TOPICS: Spread Opretor merge object and array

array1 = [1,2,3,4,5,6]
array2 = [7,8,9]

// here i want to two array => array1+array2 like this [1,2,3,4,5,6,7,8,9]

// using spread operator add two array
array3 = [...array1,7,8,9]					// method 1 maunally
console.log(array3)


array4 = [...array1,...array2]					// method 2 add array array4 = [...array1,...array2,...array3] so on	
console.log(array4)

array5 = [...array1,...array2,...array3,...array4]
array6 = {...array1,...array2,...array3,...array4}			// using curly braces show keyvalue of element				
console.log(array5)
console.log('---------------------------------')
console.log(array6)


// array3 = array1+array2 // it is convert into string

/*-------------------------Object---------------------------------*/

Obj1 = {
	id:1,
	name: "Prafful",
	age: "25"
}

Obj2 = {
	gender: "Male",
	email: "prafful1711@gmail.com"
}

Obj3 = {...Obj1,...Obj2}
Obj3 = {...Obj1,...Obj2,"mobile":9771805104}  // manually add key value


console.log(Obj3)