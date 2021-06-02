// CLASS TOPICS: Parse and Stringfy


// Example 1
list = [1,2,3,4,5]
myObj = {"numberListA":list}
myObj['numberInString'] = JSON.stringify(list)
console.log(typeof(myObj.numberInString));
console.log(myObj.numberInString);

converInList = JSON.parse(myObj.numberInString);
console.log(converInList, typeof(converInList));
console.log('----------------------------------',)

// Example 2
myStringObj = JSON.stringify({"eid": 1, "ename": "prafful"})
console.log(myStringObj, JSON.parse(myStringObj))