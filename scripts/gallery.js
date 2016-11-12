

currentIndx=0;

MyImages1=new Array();

MyImages1[0]='img/photos/photo1.jpg';

MyImages1[1]='img/photos/photo2.jpg';

MyImages1[2]='img/photos/photo3.jpg';

MyImages1[3]='img/photos/photo4.jpg';

MyImages1[4]='img/photos/photo5.jpg';

images1Preloaded = new Array(4)

MyImages2=new Array();

MyImages2[0]='img/nature/nature1.jpg';

MyImages2[1]='img/nature/nature2.jpg';

MyImages2[2]='img/nature/nature3.jpg';

MyImages2[3]='img/nature/nature4.jpg';

MyImages2[4]='img/nature/nature5.jpg';

images2Preloaded = new Array(4)

MyImages3=new Array();

MyImages3[0]='img/contart/contart1.jpg';

MyImages3[1]='img/contart/contart2.jpg';

MyImages3[2]='img/contart/contart3.jpg';

MyImages3[3]='img/contart/contart4.jpg';

MyImages3[4]='img/contart/contart5.jpg';

images3Preloaded = new Array(4)

MyImages4=new Array();

MyImages4[0]='img/portraits/portrait1.jpg';

MyImages4[1]='img/portraits/portrait2.jpg';

MyImages4[2]='img/portraits/portrait3.jpg';

MyImages4[3]='img/portraits/portrait4.jpg';

MyImages4[4]='img/portraits/portrait5.jpg';

images4Preloaded = new Array(4)

for (var i = 0; i < MyImages1.length ; i++){

images1Preloaded[i] = new Image(120,120)
images2Preloaded[i] = new Image(120,120)
images3Preloaded[i] = new Image(120,120)
images4Preloaded[i] = new Image(120,120)

images1Preloaded[i].src=MyImages1[i]
images2Preloaded[i].src=MyImages2[i]
images3Preloaded[i].src=MyImages3[i]
images4Preloaded[i].src=MyImages4[i]

}

function newImage() {

currentIndx=Math.round(Math.random()*3)

document.photo.src=images1Preloaded[currentIndx].src

document.nature.src=images2Preloaded[currentIndx].src

document.contart.src=images3Preloaded[currentIndx].src

document.portrait.src=images4Preloaded[currentIndx].src

}
