// CLASS TOPICS: Inheritance

class Animal{
    constructor(test) {
        this.test = test;
    }
    move()
    {
        console.log(this.name + ' :is moving ', this.test)
    }
}


class Dog extends Animal {
    constructor(name, test){
        super(test)
        this.name = name;
    }
}

class Cat extends Animal{
    constructor(name, test){
        super(test)
        this.name = name;
    }
}

class Snake extends Animal{
    constructor(name, test){
        super(test)
        this.name = name;
    }
}

dog = new Dog("Bull Dog", 'testing')
snake = new Snake("Snake", 'testing')
cat = new Cat("Cat", 'testing')

dog.move()
snake.move()
cat.move()