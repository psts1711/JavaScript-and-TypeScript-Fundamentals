// ITERATORS


const users = {
    currentUser: 0,
  data:[{name:"shagun",age:22,email:"abc@gmail.com"},
  {name:"codesikho",age:22,email:"info@codesikho.com"},
  {name:"abc",age:22,email:"efg@gmail.com"}],
  iterate(){
    if(this.currentUser >= this.data.length){
      return {value:this.data[this.currentUser],done:true};
    }
    const returnedValue = {value:this.data[this.currentUser],done:false};
    this.currentUser++;
    return returnedValue;
  }
  };
  
  console.log(users.iterate());
  console.log(users.iterate());
  console.log(users.iterate());
  console.log(users.iterate());