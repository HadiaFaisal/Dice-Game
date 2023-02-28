var randomnumber1;
randomnumber1= Math.random();
randomnumber1= randomnumber1*6;
randomnumber1= Math.floor(randomnumber1)+1;
console.log(randomnumber1);

var randomnumber2;
randomnumber2= Math.random();
randomnumber2= randomnumber2*6;
randomnumber2= Math.floor(randomnumber2)+1;
console.log(randomnumber2);

if (randomnumber1==1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
if (randomnumber1==2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
if (randomnumber1==3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
if (randomnumber1==4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
if (randomnumber1==5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
if (randomnumber1==6){
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}


if (randomnumber2==1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
if (randomnumber2==2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if (randomnumber2==3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if (randomnumber2==4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if (randomnumber2==5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
if (randomnumber2==6){
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if (randomnumber1 == randomnumber2){
    document.getElementById("result").innerHTML=" DRAW! ";
}
else if (randomnumber1 > randomnumber2){
    document.getElementById("result").innerHTML="🚩 PLAYER 1 WON! ";
}
else if (randomnumber1 < randomnumber2){
    document.getElementById("result").innerHTML=" PLAYER 2 WON! 🚩";
}


