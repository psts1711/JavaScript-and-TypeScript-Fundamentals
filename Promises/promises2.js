// Class Topics: Using Promise 

const isBreadAvailable = false;
const isEggsAvailable = false;

// exampe 2
function getNumber()
{
    return new Promise(resolve =>{
        resolve(3)
    })
}

function squareNumberLessThanFive(number)
{
    return new Promise((resolve, reject) =>{
        if(number < 5)
        {
            resolve(number*number)
        }
        else{
            reject('Number should be less than: 5')
        }
    })
}

getNumber().then((number) =>{
    squareNumberLessThanFive(number).then((data) =>{
        console.log(data)
    }).catch((err) =>{
        console.log(err)
    })
    
}).catch((err)=>{
    console.log(err)
    
})
