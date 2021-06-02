// Class Topic: enum and interface in Typescript

// interface is also called Model
interface User {
    name: string;
    age: number;
    password: string;
    email: string;
}

const users : User[] = [
    { name:"prafful", age:20, password:"123456", email:"abcd@gmail.com"},
    { name:"prafful2", age:26, password:"12345689", email:"abcd234@gmail.com"}
]

// enum

// const upKey = 0
// const downKey = 1
// const leftKey = 2
// const rightKey = 

   const keyPressed = 0;

   enum Keys {
       UP_KEY = 0,
       DOWN_KEY = 1,
       LEFT_KEY = 2,
       RIGHT_KEY = 3,

   }

   if(keyPressed==Keys.UP_KEY)
   {
       console.log('Up key pressed');
   }
   else if(keyPressed==Keys.DOWN_KEY)
   {
       console.log('Down key pressed');
   }
   else if(keyPressed==Keys.LEFT_KEY)
   {
       console.log('Left key pressed');
   }
   else if(keyPressed==Keys.RIGHT_KEY)
   {
       console.log('Right key pressed');
   }
   else{
    console.log('No key pressed');
   }

