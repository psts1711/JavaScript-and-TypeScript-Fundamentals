// CLASS TOPICS: Switch Statement

upKey = 0;
downKey = 1;
leftKey = 2;
rightKey = 3;

keyPressed = 0;

/* if(keyPressed===upKey)
{
    console.log('Up key is pressed')
}
else if(keyPressed===downKey)
{
    console.log('down key is pressed')
}
else if(keyPressed===leftKey)
{
    console.log('Left key is pressed')
}
else if(keyPressed===rightKey)
{
    console.log('Right key is pressed')
} */

switch(keyPressed)
{
    case(upKey):{
        console.log('Up key is pressed')
        break;
    }
    case(downKey):{
        console.log('Down key is pressed')
        break;
    }
    case(leftKey):{
        console.log('Left key is pressed')
        break;
    }
    case(rightKey):{
        console.log('Right key is pressed')
        break;
    }
    default:{
        console.log('Right key is pressed')
    }
}