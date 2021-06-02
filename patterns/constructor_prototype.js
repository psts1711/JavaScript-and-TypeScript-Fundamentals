"use strict";
// Class: Constructor and Prototype patterns
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// constructor: Construct
var Car = /** @class */ (function () {
    function Car(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
    Car.prototype.aboutCar = function () {
        console.log(this.name, this.model, this.price);
    };
    return Car;
}());
var car = new Car('Safari', '2020', 200000);
car.aboutCar();
// prototype patterns. it is a blueprint and structure 
var Animal = /** @class */ (function () {
    function Animal(name, animalType) {
        this.name = name;
        this.animalType = animalType;
    }
    Animal.prototype.tellAboutYou = function () {
        console.log('hello, i am a: ' + this.animalType + ' My name is: ' + this.name);
    };
    return Animal;
}());
var Rabit = /** @class */ (function (_super) {
    __extends(Rabit, _super);
    function Rabit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rabit.prototype.run = function () {
        console.log(this.name + ' : is running');
        console.log(this.animalType + ' : is running');
    };
    return Rabit;
}(Animal));
var rabit = new Rabit('pikachu', 'animal');
rabit.tellAboutYou();
rabit.run();
