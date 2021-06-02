// Class Topic: enum and interface in Typescript
var users = [
    { name: "prafful", age: 20, password: "123456", email: "abcd@gmail.com" },
    { name: "prafful2", age: 26, password: "12345689", email: "abcd234@gmail.com" }
];
// enum
// const upKey = 0
// const downKey = 1
// const leftKey = 2
// const rightKey = 
var keyPressed = 5;
var Keys;
(function (Keys) {
    Keys[Keys["UP_KEY"] = 0] = "UP_KEY";
    Keys[Keys["DOWN_KEY"] = 1] = "DOWN_KEY";
    Keys[Keys["LEFT_KEY"] = 2] = "LEFT_KEY";
    Keys[Keys["RIGHT_KEY"] = 3] = "RIGHT_KEY";
})(Keys || (Keys = {}));
if (keyPressed == Keys.UP_KEY) {
    console.log('Up key pressed');
}
else if (keyPressed == Keys.DOWN_KEY) {
    console.log('Down key pressed');
}
else if (keyPressed == Keys.LEFT_KEY) {
    console.log('Left key pressed');
}
else if (keyPressed == Keys.RIGHT_KEY) {
    console.log('Right key pressed');
}
else {
    console.log('No key pressed');
}
