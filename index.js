
var n1=Math.floor(Math.random()*6 + 1);
var x1="dice"+n1+".png";
var source1="images/"+x1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",source1);

var n2=Math.floor(Math.random()*6 + 1);
// var x2="dice"+n2+".png";
var source2="images/dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src",source2);



if(n1>n2)
{
    document.querySelector("h1").innerHTML="player 1 Wins";
}
else if(n2>n1)
{
    document.querySelector("h1").innerHTML="player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw !";
}