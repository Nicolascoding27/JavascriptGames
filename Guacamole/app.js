//first select all the div with square 
const square=document.querySelectorAll('.square')
const mole=document.querySelectorAll('.mole')
const time=document.querySelectorAll('#time');
const score=document.querySelectorAll('#score');
let result=0;
function RandomSquare(){ //place the mole in a random square
    square.forEach(className=>{
        className.classList.remove('mole')
    } )
    let randomPosition=square[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole');//add class to the moles

//id for the random postion 
     hitPosition= randomPosition.id
    }
    square.forEach(id=> {
    id.addEventListener('mouseup',()=>{
    if(id.id ===hitPosition){
        result+=1
        score.textContent = result
    }
})
})
//we need to move the mole to different squares
function MoveMole(){
    let timerid=null 
    timerId=setInterval(RandomSquare,1000)
}
MoveMole()