/*
    File Name: slide.js
    Created by: Simon Hagen Strand
    When: November 2016
    Purpose: To animate sliding images on the front page
*/

// Global variable to control what picture to slide next
var currentPic = 0;

// A function that calculates how fast the slide should go using cosine
function updatePos(pos, endpos) {
    var pipos = (pos/endpos)*2*Math.PI;
    return (Math.cos(pipos) + 1.04)*endpos/400;
}

// A function that controls the timing of the animations
function slideControl() {
    // Starts the slide animation every 8 seconds
    slider();
    var id1 = setInterval(slider, 8000);

    // Starts the slides over every 80 seconds
    setTimeout(slideControl, 80000);

    // The function that animates the sliding pictures
    function slider() {

        // Position variables
        var pos = -20;
        var endpos = 100;

        var slidePics = document.getElementsByClassName("slidePics");

        // Fires an anonymous self-invoking function every 5 milliseconds
        // that changes the position of the pictures gradually to animate them
        var id2 = setInterval(function(currentPic){

            if (pos >= endpos) {
                // Stops the current animation
                clearInterval(id2);
            }
            else {
                // Calculation the new position
                pos += updatePos(pos, endpos);

                // Updates the style.left (css) of the image
                slidePics[currentPic].style.left = pos + '%';
            }
        }, 5, currentPic);

        // Changes currentPic so that a new image get animated
        currentPic += 1;

        // If there are no more pictures start over
        if (currentPic == slidePics.length){
            currentPic = 0;
            clearInterval(id1);
        }
    }
}




