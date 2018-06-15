
function keyCode(event) 
{
    var x = event.keyCode;
    if (x == 27) 
    {
        changepic();
    }
}

function changepic()
{
 document.getElementById("space").style.top=2000 + "px";  
}
