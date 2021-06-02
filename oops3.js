// CLASS TOPICS: Static vs Non Static


class Dog{
    //tatic age = 22;
    constructor(name){
        this.name = name;
    }

    myName()
    {
        console.log('Hello my name is: '+ this.name )
        // Dog.bark() // static
        // this.bark(); // non static
    }
    // static mean all of same // static lagane par class ke naam se call karnge jaise ki Dog.bark()
    bark()
    {
        console.log('Woff')
    }
}

dog1 = new Dog('Bull Dog');
dog1.myName();
//dog1.bark();

dog2 = new Dog('German Dog');
dog2.myName();
//dog2.bark();

//Dog.bark();