let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let color=["red","green","yellow","purple"];
let btns=document.querySelectorAll(".btn");
let check=false;
document.addEventListener("keypress",function()
{
   if(started==false)
  {
    console.log("Game is started!");
     started=true;
     levelUp();
  }
});

function flashBtn(color)
{
    let flash=document.querySelector(`#${color}`);
    flash.style.backgroundColor="white";
    setTimeout(function(){
        if(color=="red")
        flash.style.backgroundColor="#d95980";
        else if(color=="yellow")
        flash.style.backgroundColor=" #f99b45";
        else if(color=="green")
        flash.style.backgroundColor="#63aac0";
        else
        flash.style.backgroundColor="#819ff9";
    },1000);
   
}
function userBtn(color)
{
  
    let flash=document.querySelector(`#${color}`);
    flash.style.backgroundColor="green";
    setTimeout(function(){
        if(color=="red")
        flash.style.backgroundColor="#d95980";
        else if(color=="yellow")
        flash.style.backgroundColor=" #f99b45";
        else if(color=="green")
        flash.style.backgroundColor="#63aac0";
        else
        flash.style.backgroundColor="#819ff9";
    },1000);
}
function levelUp()
{ 
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;
  let randIdx=Math.floor(Math.random()*3);
  let btn_color=color[randIdx];
  flashBtn(btn_color);
  gameSeq.push(btn_color);
  console.log(gameSeq);
 
}
function checkAns(idx)
{
   if(userSeq[idx]==gameSeq[idx])
  {  if(userSeq.length==gameSeq.length)setTimeout(levelUp,1500)}
    else
   { h2.innerHTML=`Game over! Your score is <b>${level}</b>. <br> press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function()
    {
      document.querySelector("body").style.backgroundColor="white";
    },150);
   reset();}
}
function btnPress()
{
  
   userBtn(this.id);
   userSeq.push(this.id);
   console.log(this.id);
   checkAns(userSeq.length-1);
}


  
  for(let btn of btns)
  { 
    btn.addEventListener("click",btnPress);
  }



function reset()
{
  started=false;
  userSeq=[];
  gameSeq=[];
  level=0;
}