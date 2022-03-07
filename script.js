let compScore=0;
let userScore= 0;

const weapons = ["rock","paper","scissor"] ;
function computerPlay (name){
    let index = Math.floor(Math.random()*3) ;
    return name[index]}
    ;
function singleRound (){
        let roundResult  ="" 
        let computerSelection = computerPlay(weapons);
        let playerSelection = prompt('enter :');
        if ((computerSelection=='rock'&& playerSelection=='paper') 
    
         || (computerSelection==='paper'&& playerSelection==='scissor')
         || (computerSelection==='scissor'&& playerSelection==='rock')){
             userScore += 1
            roundResult = ('You win !!! You chose '+playerSelection+' wins '+ computerSelection + ' current result- you :'+userScore+' -computer: '+ compScore)
         
        } else if  ((computerSelection==='rock'&& playerSelection==='scissor')
    || (computerSelection==='paper'&& playerSelection==='rock')
    || (computerSelection==='scissor'&& playerSelection==='paper'))
    {
         compScore +=1 
         roundResult = ('You lose!! '+ computerSelection + " wins " + playerSelection + ' current result- you:'+ userScore +' - computer:'+ compScore)
         
     } else {
         roundResult= 'Tie!! you and the computer chose '+ computerSelection+ ' current result- you:'+userScore+' - computer:'+ compScore
     }
    
    alert(roundResult)} 

    
    for (let i=0 ; i< 500 ; i++ ){
        singleRound()
       /* if (userScore===5 || compScore===5){
            alert('game over')
          break ;} */
          if (userScore===5){
              alert('You win the game')
              break;
          }
          if (compScore===5){
              alert('computer win the game')
              break;
          }
        
          
    
    }
