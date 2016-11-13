/*
    File Name: slide.js
    Created by: Sigurd Oxaas Wie
    When: November 2016
    Purpose: To show random pictures everyNtime someone refresh page
*/


currentIndx=0;

/*Place all images in array */
MyImages1=new Array();

MyImages1[0]='img/Photos/photo1.jpg';

MyImages1[1]='img/Photos/photo2.jpg';

MyImages1[2]='img/Photos/photo3.jpg';

MyImages1[3]='img/Photos/photo4.jpg';

MyImages1[4]='img/Photos/photo5.jpg';

images1Preloaded = new Array(4);

MyImages2=new Array();

MyImages2[0]='img/Nature/nature1.jpg';

MyImages2[1]='img/Nature/nature2.jpg';

MyImages2[2]='img/Nature/nature3.jpg';

MyImages2[3]='img/Nature/nature4.jpg';

MyImages2[4]='img/Nature/nature5.jpg';

images2Preloaded = new Array(4);

MyImages3=new Array();

MyImages3[0]='img/ContArt/contart1.jpg';

MyImages3[1]='img/ContArt/contart2.jpg';

MyImages3[2]='img/ContArt/contart3.jpg';

MyImages3[3]='img/ContArt/contart4.jpg';

MyImages3[4]='img/ContArt/contart5.jpg';

images3Preloaded = new Array(4);

MyImages4=new Array();

MyImages4[0]='img/Portraits/portrait1.jpg';

MyImages4[1]='img/Portraits/portrait2.jpg';

MyImages4[2]='img/Portraits/portrait3.jpg';

MyImages4[3]='img/Portraits/portrait4.jpg';

MyImages4[4]='img/Portraits/portrait5.jpg';

images4Preloaded = new Array(4);

/*load images into the array we're gonna use */
for (var i = 0; i < MyImages1.length ; i++){

images1Preloaded[i] = new Image(120,120);
images2Preloaded[i] = new Image(120,120);
images3Preloaded[i] = new Image(120,120);
images4Preloaded[i] = new Image(120,120);

images1Preloaded[i].src=MyImages1[i];
images2Preloaded[i].src=MyImages2[i];
images3Preloaded[i].src=MyImages3[i];
images4Preloaded[i].src=MyImages4[i];

}

/*Function to load new random image everytime page is refreshed */
function newImage() {

currentIndx=Math.round(Math.random()*3);

document.photo.src=images1Preloaded[currentIndx].src;

document.nature.src=images2Preloaded[currentIndx].src;

document.contart.src=images3Preloaded[currentIndx].src;

document.portrait.src=images4Preloaded[currentIndx].src;

}
