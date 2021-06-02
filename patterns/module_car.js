"use strict";
// class module
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
    Car.prototype.tellAboutCar = function () {
        console.log(this.name, this.model, this.price);
    };
    return Car;
}());
exports.Car = Car;
