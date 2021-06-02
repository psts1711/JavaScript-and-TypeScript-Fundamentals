"use strict";
// Class Topic: Factory Pattern
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["CAR"] = 0] = "CAR";
    VehicleType[VehicleType["TRUCK"] = 1] = "TRUCK";
})(VehicleType || (VehicleType = {}));
var Cars = /** @class */ (function () {
    function Cars(name, model, doors, price) {
        this.name = name;
        this.model = model;
        this.doors = doors;
        this.price = price;
    }
    Cars.prototype.tellAboutMe = function () {
        console.log("this is car with props: ", this.name, this.model, this.doors, this.price);
    };
    return Cars;
}());
var Truck = /** @class */ (function () {
    function Truck(name, model, doors, price) {
        this.name = name;
        this.model = model;
        this.doors = doors;
        this.price = price;
    }
    Truck.prototype.tellAboutMe = function () {
        console.log("this is truck with props: ", this.name, this.model, this.doors, this.price);
    };
    return Truck;
}());
var vehicleFactory = /** @class */ (function () {
    function vehicleFactory(options) {
        var vehicle;
        switch (options.type) {
            case VehicleType.CAR: {
                vehicle = new Cars(options.name, options.model, options.doors, options.price);
                break;
            }
            case VehicleType.TRUCK: {
                vehicle = new Truck(options.name, options.model, options.doors, options.price);
                break;
            }
        }
        return vehicle;
    }
    return vehicleFactory;
}());
var vehicle1 = { type: VehicleType.CAR, doors: 4, price: 750000,
    name: "Innova", model: "2015" };
var vehicle2 = { type: VehicleType.TRUCK, doors: 2, price: 1750000,
    name: "Tata Benz", model: "2019" };
var cars = new vehicleFactory(vehicle1);
var truck = new vehicleFactory(vehicle2);
cars.tellAboutMe();
truck.tellAboutMe();
