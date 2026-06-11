let gameseq = [];
let btns = ["green","blue","yellow","red"];
let userseq = [];
let started = false ;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("Game started");
        started = true;
        levelUp ();
    }
})

function levelUp()
{
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    //select a random btn
    let randomIndex = Math.floor(Math.random()*3);
    let randomCol = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomCol}`);
    gameseq.push(randomCol);
    console.log(gameseq);
    gameFlash(randomBtn);

}
function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},1000);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")},250);
}

function btnPress()
{
    console.log(this);
    let button = this;
    userFlash(button);
    let userCol = button.getAttribute("id");
    userseq.push(userCol);
    checkAns(userseq.length-1);
}

function checkAns(index)
{
    if(userseq[index]==gameseq[index])
    {
       if(userseq.length==gameseq.length)
       {
        setTimeout(levelUp,1000);
       }
        
    }
    else
    {
        document.body.classList.add("endflash");
        setTimeout(function () {
            document.body.classList.remove("endflash");
        }, 500);
        h2.innerHTML=`Game over! You score is ${level}<br>Press any key to start`;
        restart();
    }
    
}

function restart()
{
    started = false;
    gameseq = [];
    level = 0;
    userseq = [];
}

function endFlash()
{

}

let allBtn = document.querySelectorAll(".btn")
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}


