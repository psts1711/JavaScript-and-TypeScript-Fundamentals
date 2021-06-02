// CLASS TOPICS: Function Inside Object Array

// Example 1
list = [function sayMyName(name){
    return 'Hello, My Name is: '+name
}]
console.log(list[0]('prafful'))
console.log('---------------------')

// Example 2
myObj = {firstName:"Prafful", lastName:"Sinha", "fullName": function(){
    return 'My name is: ' + this.firstName + ' ' + this.lastName
}}
console.log(myObj.firstName)
console.log(myObj.lastName)
console.log(myObj.fullName())
console.log('---------------------')

// Example 2
myObj2 = {firstName2:"HP", lastName2:"Patrolium", "fullName2": function(value){
    return 'My name is: ' + this.firstName2 + ' ' + this.lastName2 +' ' +value
}}
console.log(myObj2.firstName2)
console.log(myObj2.lastName2)
console.log(myObj2.fullName2('I am Value'))
console.log('---------------------')