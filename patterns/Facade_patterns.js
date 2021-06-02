"use strict";
// Class Topic: Facade Pattern
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
var User = /** @class */ (function () {
    function User(data) {
        this.username = data.username;
        this.age = data.age;
        this.email = data.email;
    }
    User.prototype.validateUser = function () {
        console.log('Validating User: ');
    };
    User.prototype.saveUser = function () {
        console.log('Save user using by axios to database');
    };
    User.prototype.notifyUser = function () {
        console.log('Notify that user is saved');
    };
    return User;
}());
var userFacade = /** @class */ (function (_super) {
    __extends(userFacade, _super);
    function userFacade(data) {
        return _super.call(this, data) || this;
    }
    userFacade.prototype.validateUserSaveUserAndNotify = function () {
        this.validateUser();
        this.saveUser();
        this.notifyUser();
    };
    return userFacade;
}(User));
var myuser = new userFacade({ username: "prafful", age: 27, email: "test@gmail.com" });
myuser.validateUserSaveUserAndNotify();
