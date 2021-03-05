document.addEventListener('DOMContentLoaded',() => {
    const cardArray=[ //each card should be created twice 
       {
        name:'fries',
        img:'images/fries.png'

       },
       {
        name:'fries',
        img:'images/fries.png'

       },
       {
        name:'hotdog',
        img:'images/hotdog.png'

       } ,
       {
        name:'hotdog',
        img:'images/hotdog.png'

       } ,
       {
        name:'cheeseburger',
        img:'images/cheeseburger.png'

       } ,
       {
        name:'cheeseburger',
        img:'images/cheeseburger.png'

       } ,
       {
        name:'icecream',
        img:'images/ice-cream.png'

       } ,
       {
        name:'icecream',
        img:'images/ice-cream.png'

       } ,
       {
        name:'milkshake',
        img:'images/milkshake.png'

       } ,
       {
        name:'milkshake',
        img:'images/milkshake.png'

       } ,
       {
        name:'pizza',
        img:'images/pizza.png'

       }, 
       {
        name:'pizza',
        img:'images/pizza.png'
       } 

    ]//where the cards  are going to be stored
    const grid = document.querySelector('.grid');
    let cardsChosen=[];
    let cardsChosenId=[];
    const cardswon=[];
    function createboard(){ //we're going to loop trough the array of elements
    for(let i=0; i<cardArray.length;i++){
        var card= document.createElement('img')
        card.setAttribute('src','images/blank.png')//blank is a 100p X 100 px
        card.setAttribute('data-id', i)//we have 12 cards we loop trough the array so we just have to add the card id 
        card.addEventListener('click',flipcard)
        grid.appendChild(card)//it will go to the div
    }
    }
    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')//I gotta set the attribute to the images
        const optionOneId=cardsChosenId[0];
        const optionTwoId= cardsChosenId[1];
        if ((cardsChosen[0]===cardsChosen[1])){
            alert('You found a match')
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png') 
            cardswon.push(cardsChosen);
        }
        else{
            alert("keep trying")
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
        }
        cardsChosen=[];
        cardsChosenId=[];
    }
    //flip card function 
    function flipcard(){
        let cardId = this.getAttribute('data-id');//this reffers to the scoope of the function createboard()
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        // const self =this;
        // console.log(this)
        this.setAttribute('src',cardArray[cardId].img)//add an image to the card
        if (cardsChosen.length===2){
            setTimeout(checkForMatch,500) // when the user selects 2 cards we use the check for match fucntion  
    }
}

    createboard();
});
