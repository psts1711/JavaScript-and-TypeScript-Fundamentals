// CLASS TOPICS: Primitive vs Refrence data type


// Primitive data types
x= 10;
y=x;
x=20;
console.log(x,y)

x= {name:"prafful", email:"abcd@gmail.com"};
y=x;
x={name:"abc"};
console.log(x,y)

// Refrence data types
a= {name:"prafful", email:"abcd@gmail.com"};
b=a;
a.name ="abc"
console.log(a,b)