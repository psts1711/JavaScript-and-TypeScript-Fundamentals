// Class Topic: DOM  
document.getElementById("myButton").onclick = updateText

function updateText()
{
   let result2 = document.getElementById("demo2").innerText = "Hello World";

   let result = document.getElementById("demo").innerHTML = "Hello World";

   let result3 = document.getElementById("demo3").style.color = "red";


   console.log(result)
   console.log(result2)
   console.log(result3)

   
}


