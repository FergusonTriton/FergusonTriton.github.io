var spaceImg = document.getElementById('space');


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
    spaceImg.style.top=600 + "px";
}
