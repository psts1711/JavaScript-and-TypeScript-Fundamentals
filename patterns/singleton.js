"use strict";
// Class Topic: Singleton Pattern
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(name, model, price) {
        if (Car.exist) {
            return Car.instance;
        }
        this.name = name;
        this.model = model;
        this.price = price;
        Car.exist = true;
        Car.instance = this;
    }
    Car.prototype.tellAboutCar = function () {
        console.log(this.name, this.model, this.price);
    };
    return Car;
}());
exports.Car = Car;
var myCar = new Car('innove', '2020', 780000);
myCar.tellAboutCar();
var myCar2 = new Car('Safari', '2018', 100000);
myCar2.tellAboutCar();
