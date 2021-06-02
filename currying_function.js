// Currying function

// 3*5, 2*5, 6*5, 7*5

// ek function ke ander dusra function likhete hai use clouser function kahate hai
// Basic
function multiply(number)
{
    return numB=>{
        return numB * number;
    }
}

const multiplyWithFive = multiply(5)
console.log(multiplyWithFive(3))
console.log(multiplyWithFive(2))
console.log(multiplyWithFive(6))
console.log(multiplyWithFive(7))
console.log('---------------------------------')


// real use case
// backend so jo bhi data aata hai json format me aata hai, ye array ka object hota hai

const users = [
                {
                    eid:1,
                    ename:"prafful",
                    email:"abc@gamil.cpm"
                }, 
                {
                    eid:2,
                    ename:"shreya",
                    email:"shreya@gamil.cpm"
                }
            ]

/* Using Map Method */
// method 1
const mappedUser = users.map((data)=>{
     return data.ename
 })
 console.log(mappedUser)

// method 2
const mappedUser2 = users.map(user=>user.email)
console.log(mappedUser2)
console.log('---------------------------------')


/* Currying Method */
function mappedKeyWithObject(key)
{
    return object =>{
         return object[key]
    }
};

const getByName = mappedKeyWithObject('ename');
const mappedUsers = users.map(getByName)
console.log(mappedUsers)