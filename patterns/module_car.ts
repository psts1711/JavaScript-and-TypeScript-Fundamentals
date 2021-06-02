// class module

export class Car{
    protected name: string;
    protected model: string
    protected price: number
    constructor(name: string, model: string, price: number)
    {
        this.name = name;
        this.model = model;
        this.price = price;
    }
    tellAboutCar()
    {
        console.log(this.name, this.model, this.price)
    }
}