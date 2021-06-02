// Class Topic: Singleton Pattern

export class Car{
    protected name!: string;
    protected model!: string
    protected price!: number
    static exist: boolean;
    static instance: any;

    constructor(name: string, model: string, price: number)
    {
        if(Car.exist)
        {
            return Car.instance;
        }
        this.name = name;
        this.model = model;
        this.price = price;
        Car.exist = true;
        Car.instance = this;
    }
    tellAboutCar()
    {
        console.log(this.name, this.model, this.price)
    }
}

const myCar = new Car('innove', '2020', 780000)
myCar.tellAboutCar();

const myCar2 = new Car('Safari', '2018', 100000)
myCar2.tellAboutCar();