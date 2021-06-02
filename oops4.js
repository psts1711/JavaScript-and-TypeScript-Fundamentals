// CLASS TOPICS: Polymorphism

class Dog{
    constructor(name){
        this.name = name;
    }
    move()
    {
        console.log(this.name + ' : dog is moving ')
    }
}

class Cat{
    constructor(name){
        this.name = name;
    }
    move()
    {
        console.log(this.name + ' : cat is moving ')
    }
}

class Rat{
    constructor(name){
        this.name = name;
    }
    move()
    {
        console.log(this.name + ' : rat is moving ')
    }
}

class Snake{
    constructor(name){
        this.name = name;
    }
    move()
    {
        console.log(this.name + ' : Snake is sliding ')
    }
}

animal = null;
randomNumber = 2;

if(randomNumber==0)
{
    animal = new Snake('snake')
}
else if(randomNumber==1)
{
    animal = new Dog('bull-dog')
}
else if(randomNumber==2)
{
    animal = new Cat('Cat')
}
else if(randomNumber==3){
    animal = new Rat('Rat')
}

animal.move()