// CLASS TOPICS: if, else if, else statement

isBreadAvailable = true;
isEggAvailable = false;

if(isBreadAvailable && isEggAvailable)
{
    console.log('Yeah! I got bread and eggs')
}
else if(isEggAvailable)
{
    console.log('Yeah! I got only eggs')
}
else if(isBreadAvailable)
{
    console.log('Yeah! I got only bread')
}
else
{
    console.log('I got nothing... I will make tea')
}

