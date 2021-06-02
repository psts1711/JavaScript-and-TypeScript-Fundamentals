// Class Topic: Private, Public, Protected in Typescript
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.demo = function () {
        console.log(this.name);
    };
    return Dog;
}());
var dog = new Dog('prafful');
dog.demo();
