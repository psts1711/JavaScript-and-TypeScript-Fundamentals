// Class Topic: Factory Pattern

interface Vehicle{
    type: number;
    doors: number;
    model: string;
    name: string;
    price: number;
}

enum VehicleType{
    CAR = 0,
    TRUCK = 1
}

class Cars{
    protected name: string;
    protected model: string;
    protected price: number;
    protected doors: number;
    constructor(name: string, model: string, doors: number, price: number)
    {
        this.name = name;
        this.model = model;
        this.doors = doors;
        this.price = price;
    }
    tellAboutMe()
    {
        console.log("this is car with props: ", this.name, this.model, this.doors, this.price)
    }
}


class Truck{
    protected name: string;
    protected model: string;
    protected price: number;
    protected doors: number;
    constructor(name: string, model: string, doors: number, price: number)
    {
        this.name = name;
        this.model = model;
        this.doors = doors;
        this.price = price;
    }
    tellAboutMe()
    {
        console.log("this is truck with props: ",this.name, this.model, this.doors, this.price)
    }
}


class vehicleFactory{
    constructor(options: Vehicle)
    {
        let vehicle : any;
        switch (options.type)
        {
            case VehicleType.CAR :{
                vehicle = new Cars(options.name, options.model, options.doors,  options.price,);
                break
            }
            case VehicleType.TRUCK:{
                vehicle = new Truck(options.name, options.model, options.doors,  options.price,)
                break;
            }
        }
        return vehicle
    }
}

const vehicle1 : Vehicle = {type: VehicleType.CAR, doors: 4, price: 750000, 
                            name: "Innova", model:"2015"}

const vehicle2 : Vehicle = {type: VehicleType.TRUCK, doors: 2, price: 1750000, 
                            name: "Tata Benz", model:"2019"}

const cars : any = new vehicleFactory(vehicle1)
const truck : any = new vehicleFactory(vehicle2)

cars.tellAboutMe()
truck.tellAboutMe()
