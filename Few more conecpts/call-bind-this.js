// CLASS TOPICS: Call, Bind, apply and this method


// Apply Method
reactangle= {length:10, breadth:20}
function getLengthAndBreadth(value, nmber){
    console.log('Apply Method');
    console.log('lenght of reactangle is: ' + this.length);
    console.log('breadth of reactangle is: ' + this.breadth);
    console.log('arguments are: ' + value);
    console.log('and number is: ' + nmber);


}
getLengthAndBreadth.apply(reactangle,['i am value',10000])
console.log('---------------------------------------');


// Call Method
reactangle2= {length:35, breadth:70}
function getLengthAndBreadthByCall(value, nmber){
    console.log('Call Method');
    console.log('lenght of reactangle is: ' + this.length);
    console.log('breadth of reactangle is: ' + this.breadth);
    console.log('arguments are: ' + value);
    console.log('and number is: ' + nmber);
}
getLengthAndBreadthByCall.call(reactangle2,'i am value',10000)
console.log('---------------------------------------');


// Bind Method 

reactangle3= {length:55, breadth:80}
function getLengthAndBreadthByBind(value, nmber){
    console.log('Bind Method');
    console.log('lenght of reactangle is: ' + this.length);
    console.log('breadth of reactangle is: ' + this.breadth);
    console.log('arguments are: ' + value);
    console.log('and number is: ' + nmber);
}
// newFunc = getLengthAndBreadthByBind.bind(reactangle3,'i am value',10000)
newFunc = getLengthAndBreadthByBind.bind(reactangle3)
newFunc('i am value',10000);
console.log('---------------------------------------');
 