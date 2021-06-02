class Animal{
    constructor()
    {

    }
    move()
    {
        console.log(this.name + ' :is moving')
    }
}

class Snake extends Animal{
    constructor(name){
        super()
        this.name = name;
    }
    move(){
        console.log(this.name + ' :is slidng')

    }
}

class Cat extends Animal{
    constructor(name){
        super()
        this.name = name;
    }
}

snake = new Snake('snake');
snake.move();