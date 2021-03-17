document.addEventListener('DOMContentLoaded',() =>{
    const squares=document.querySelectorAll('.grid div')
    const result=document.querySelector('#result')
    const displayCurrentPlayer=document.querySelector('#current-player')
    let currentPlayer=1//iniciamos el current player en 1
    for(let i=0;i<squares.length;i++)
    (function(index){
        squares[i].onclick= function(){
            if (squares[index+7].classList.contains('taken')){
                if(currentPlayer===1){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    //change the player
                    currentPlayer=1
                    displayCurrentPlayer.innerHtml=currentplayer
                } else if (currentPlayer===2){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    //now we change to change the player 
                    currentplayer=2
                    displayCurrentPlayer.innerHTML=currentPlayer
                }
                else alert('cant go there')

            }
        }
    })(i)

})