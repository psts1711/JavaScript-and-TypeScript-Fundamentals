// CLASS TOPICS: nested function

function a()
{
    console.log('a function is called')
}

function b()
{
    console.log('b function is called')
}
function demo()
{
    a()
    b()
}

demo()

/* nested function inside main function  */

// Example 1
function nested_demo()
{
    function ab()
    {
        console.log('ab function is called')
    }
    console.log('nested_demo function is called')
    ab()
}
nested_demo()

// Example 2
function nested_demo()
{
    function ab()
    {
        return 5;
    }
    console.log('nested_demo function is called')
    return ab();
}
result = nested_demo()
console.log(result)

// Example 3
function say_myname(name)
{
    function prafful()
    {
        console.log('Your name is prafful')
    }
    function notprafful()
    {
        console.log('Your name is not prafful')

    }
    console.log('my name is: ', name)
    if(name=='prafful')
    {
        prafful();
    }
    else{
        notprafful();
    }
}

say_myname('prafful')