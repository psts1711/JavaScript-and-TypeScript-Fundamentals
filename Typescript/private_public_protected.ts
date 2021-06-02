// Class Topic: Private, Public, Protected in Typescript

// private sirf ek hi class me use ho sakta hai
// protected class and subclass ke sath use ho sakta hai
// public can be used in anywhere

class Dog{
    name: string;
    constructor(name: string)
    {
        this.name = name;
    }
   public demo()
    {
        console.log(this.name);
    }
}

// class test extends Dog{
//     constructor(parameter: number)
//     {
//         super('')
//         super.demo
//     }
//}

const dog = new Dog('prafful');
dog.demo()