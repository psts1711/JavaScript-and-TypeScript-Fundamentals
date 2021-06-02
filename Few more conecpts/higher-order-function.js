// CLASS TOPICS: Higher order function

function sayMyNamae(name)
{
    console.log('My name is: '+name);
}

function higherOrderFunction(func){
   return function wrappedFunction(name){
        console.log('Run some code before actual function');
        func(name);
        console.log('Run some code after actual function');
    }
}

newFunc = higherOrderFunction(sayMyNamae);
newFunc('prafful')