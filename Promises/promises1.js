// Class Topics: Using Promise 

const isBreadAvailable = false;
const isEggsAvailable = false;

// exampe 1
function getStufFromMarket()
{
    return new Promise((resolve, reject) =>{
        if(isBreadAvailable)
        {
            resolve('I got the bread')
        }
        else if(isEggsAvailable)
        {
            resolve('I got the eggs')
        }
        else
        {
            reject('None is available')
        }
    })
}

getStufFromMarket().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})