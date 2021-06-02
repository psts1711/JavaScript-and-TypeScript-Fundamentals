// Class: Constructor and Prototype patterns

// constructor: Construct
class Car{
    private name: string;
    private model: string;
    private price ?: number;
    
    constructor(name:string, model: string, price?: number)
    {
        this.name = name;
        this.model = model;
        this.price = price;
    }

    aboutCar()
    {
        console.log(this.name, this.model, this.price)
    }
}

const car = new Car('Safari', '2020', 200000);
car.aboutCar();

// prototype patterns. it is a blueprint and structure 
class Animal{
    protected name: string;
    protected animalType: string;

    constructor(name: string, animalType:string)
    {
        this.name = name;
        this.animalType = animalType;

    }
    tellAboutYou()
    {
        console.log('hello, i am a: ' + this.animalType + ' My name is: ' + this.name);
    }
}

class Rabit extends Animal{
    run()
    {
        console.log(this.name + ' : is running');
        console.log(this.animalType + ' : is running');

    }
}

const rabit = new Rabit('pikachu', 'animal')
rabit.tellAboutYou();
rabit.run()