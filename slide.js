

var currentPic = 0;

function slideControl() {
    slider();
    setInterval(slider, 8000);
}

function updatePos(pos, endpos)
{
    var pipos = (pos/endpos)*2*Math.PI;
    return (Math.cos(pipos) + 1.04)*endpos/400;
}



function slider() {
    console.log("hdejfm");
    var pos = -20;
    var endpos = 100;
    var slidePics = document.getElementsByClassName("slidePics");

    (function(currentPic) {
        var id = setInterval(function(){
            if (pos >= endpos) {
                clearInterval(id);
            } else {
                pos += updatePos(pos, endpos);
                slidePics[currentPic].style.left = pos + '%';
            }
        }, 5);
    } )(currentPic);
    currentPic += 1;
}