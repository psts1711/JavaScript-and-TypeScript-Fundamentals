// GENERATORS

// USING GENERATORS
// let myArray = [1,2,3,4,5];

// let newArray = [];
// for(let item of myArray){
// newArray.push(item * item);
// }

// console.log(newArray);

// let myArray = [1,2,3,4,5];
// function* myGenerator(){
//   for(let item of myArray){
//    yield item * item;
//     }

// }

// let myIterator = myGenerator();

// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());





const users = {
    data:[{name:"shagun",age:22,email:"abc@gmail.com"},
    {name:"codesikho",age:22,email:"info@codesikho.com"},
    {name:"abc",age:22,email:"efg@gmail.com"}],
    // iterate(){
    //   if(this.currentUser >= this.data.length){
    //     return {value:this.data[this.currentUser],done:true};
    //   }
    //   const returnedValue = {value:this.data[this.currentUser],done:false};
    //   this.currentUser++;
    //   return returnedValue;
    // }
    [Symbol.iterator]: function* userGenerator(){
      let currentUser = 0;
      while(currentUser < this.data.length){
        yield this.data[currentUser];
       currentUser++;
      }
    }
    };
    
    
    // let myUsers = users.iterate();
    
    // while(!myUsers.done){
    //   console.log(myUsers.value);
    //   myUsers = users.iterate();
    // }
    
    for (let user of users){
    console.log(user);
    }
    