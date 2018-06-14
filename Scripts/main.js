var myButton = document.querySelector('Home');
myButton.onclick = function ()
{
  ChangeText();
}

function ChangeText ()
{
 document.getElementById("demo").innerHTML = "Hello JavaScript!";
}


