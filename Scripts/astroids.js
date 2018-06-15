
function keyCode(event) 
{
    var char = event.which || event.keyCode;
    if (char == 97) 
    {
        changepic();
    }
}

function changepic()
{
 document.getElementById("space").style.top=2000 + "px";  
}
