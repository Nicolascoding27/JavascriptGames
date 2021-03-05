//first select all the div with square 
const square=document.querySelectorAll('.square')
const mole=document.querySelectorAll('.mole')
const timeLeft=document.querySelectorAll('#time');
const score=document.querySelectorAll('#score');
let result=0;
let currentTime=timeLeft.textContent
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
        result= result + 1 
        score.textContent = result
        hitPosition=null;
    }
})
})

//we need to move the mole to different squares
function MoveMole(){
    let timerId= null;
    timerId=setInterval(RandomSquare,500)
}
MoveMole()
function countDown(){
    currentTime--
    timeLeft.textContent= currentTime
    if(currentTime===0){
        clearInterval(timerId)
        alert(`GAME OVER! Your final score is ${result}`)
    }
}

let timerId=setInterval(countDown,1000)
