// Class Topics: async and await

const isBreadAvailable = false;
const isEggsAvailable = false;

// exampe 2
function getNumber()
{
    return new Promise(resolve =>{
        resolve(5)
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

async function demo(){
    try{
        const number = await getNumber();
        const square = await squareNumberLessThanFive(number)
        console.log(square);
    }catch(err)
    {
        console.log(err);

    }
}
demo();