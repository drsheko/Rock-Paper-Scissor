const weapons = ["rock","paper","scissor"] ;
function computerPlay (name){
    let index = Math.floor(Math.random()*3) ;
    return name[index]}
  let computerSelection = computerPlay(weapons);  
  let playerSelection = prompt('enter :')

  let compScore=0;
  let userScore= 0;
 function singleRound (){
    

    if (computerSelection=='rock'&& playerSelection=='paper'){
        return  alert("You win!! Paper wins Rock ") ; userScore++ ;
         alert (userScore)
    }
   else if (computerSelection==='rock'&& playerSelection==='scissor'){
        return alert("You lose!! Rock wins Scissor "); compScore++;
        alert (userScore)
    }

    else if (computerSelection==='paper'&& playerSelection==='rock'){
     return alert("You lose!! Paper wins Rock "); compScore++ ;
     alert (userScore)}

    else if (computerSelection==='paper'&& playerSelection==='scissor'){
     return alert("You win!! Scissor wins paper "); userScore++}
    else if (computerSelection==='scissor'&& playerSelection==='paper'){
     return alert("You lose!! Scissor wins paper ");compScore++;}
    else if (computerSelection==='scissor'&& playerSelection==='rock'){
        return alert("You win!! Rock wins scissor ");userScore++} 
    else {return alert('Draw')}}


  
  alert('your selection is '+ playerSelection)
  singleRound();
  alert( "computer selection is  " + computerSelection)
  alert("the result : " + compScore+ " : "+ userScore );
   