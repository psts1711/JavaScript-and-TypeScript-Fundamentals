// CLASS TOPICS: Classes

// classes is part of Object Oriented Programming Language
// Introduce in Javascript - ES6

// pascal casing = Helloworld
// camel casing = helloWorld

class Dog{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    bark()
    {
        console.log(this.name + ' : is barking')
    }
    greet()
    {
        console.log('Hello my name is: '+ this.name + ' My age is: ' + this.age)
    }
}

dog1 = new Dog('Bull Dog', 22);
dog1.bark();
dog1.greet();

dog2 = new Dog('German Dog', 27);
dog2.bark();
dog2.greet();