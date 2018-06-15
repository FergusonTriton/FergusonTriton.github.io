
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
 document.getElementById("space").style.width='200px';
}
