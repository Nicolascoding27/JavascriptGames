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
    function createboard(){ //we're going to loop trough the array of elements
    for(let i=0; i<cardArray.length;i++){
        var card= document.createElement('img')
        card.setAttribute('src','images/blank.png')//blank is a 100p X 100 px
        car
    }

    }





})