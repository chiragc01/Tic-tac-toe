let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_button");
let newGamebtn = document.querySelector("#new_button");
let msgcontainer = document.querySelector(".mess-container");
let msg= document.querySelector("#msg");
let hidden=  document.querySelector(".hidden");

let turnO = true;

 const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ]

 const resetbtn=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    hidden.classList.remove('hide');
    
 }

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
 });    
 const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }

const showWinner = (winner) =>{
    msg.innerText=` Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    hidden.classList.add('hide');
    disableboxes();
};

 const checkwinner=()=>{
    for (let pattern of winPattern){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if(pos1val !=""&& pos2val!="" && pos3val!= ""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("Winner!",pos1val);
                
                showWinner(pos1val);
            }
        }


    }
 }
 
 newGamebtn.addEventListener("click",resetbtn);
 reset.addEventListener("click",resetbtn);
 