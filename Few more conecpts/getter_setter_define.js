// CLASS TOPICS: Getter, Stter, Define

// gettter
obj = {firstName:"Prafful", lastName:"Sinha", get fullName(){
    return this.firstName + this.lastName
}}
console.log(obj.fullName);
console.log('----------------------');

// setter can add or update value
obj2 = {firstName2:"Prafful", lastName2:"Sinha", get fullName2(){
    return this.firstName2 + this.lastName2
}, set updateFistName(name){
    this.firstName2 = name
}, set addAnimal(animalName){
    this.animal = animalName
}
}
obj2.updateFistName = 'xyz'
console.log(obj2.fullName2);
obj2.addAnimal = 'Leopard'
console.log(obj2.animal);
console.log('----------------------');


// define property
Object.defineProperty(obj, 'fruit', {
    value:'mango'
})

console.log(obj.fruit)

