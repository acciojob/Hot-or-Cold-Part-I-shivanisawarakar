//your code here
var btn=document.getElementById("btn");
var numPtag=document.getElementById("num");
var res=document.getElementById("respond");
var inputvalue=document.getElementById("guess").value;

function randomNumGenerator() {
    randomNum=Math.floor(Math.random()*41)-20;
	document.getElementById("num").innerText=randomNum;
	guessNum();
	checkGame();
	
}

function guessNum() {
	input=Number(document.getElementById("guess").value);	
}


function checkGame() {

if(Math.abs(randomNum- input)<=5)
{
	documet.getElementById("respond").innerText="Hot";
}
else
{
	documet.getElementById("respond").innerText="Cold";
}
	
}

btn.addEventListener("click",randomNumGenerator);
