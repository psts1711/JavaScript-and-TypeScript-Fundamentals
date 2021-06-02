// CLASS TOPICS: Inheritance

class Animal{
    constructor() {
        console.log("Constructor is called")
    }
    move()
    {
        console.log(this.name + ' :is moving')
    }
}


class Dog extends Animal {
    constructor(name){
        super()
        this.name = name;
    }
}

class Cat extends Animal{
    constructor(name){
        super()
        this.name = name;
    }
}

class Snake extends Animal{
    constructor(name){
        super()
        this.name = name;
    }
}

dog = new Dog("Bull Dog")
snake = new Snake("Snake")
cat = new Cat("Cat")

dog.move()
snake.move()
cat.move()