
    let compScore=0;
    let userScore=0 ;
function singleRound (num){
      
        let roundResult  ="" 
        let roundScore= ""
        const weapons = ["rock","paper","scissor"]

        function computerPlay (name){
             let index = Math.floor(Math.random()*3) ;
             return name[index]}
        let computerSelection = computerPlay(weapons);
        let playerSelection = weapons[num];
        if ((computerSelection=='rock'&& playerSelection=='paper') 
    
         || (computerSelection==='paper'&& playerSelection==='scissor')
         || (computerSelection==='scissor'&& playerSelection==='rock')){
             userScore += 1
            roundResult = ('You win !!! You chose '+playerSelection+' wins '+ computerSelection + ' current result- you :'+userScore+' -computer: '+ compScore);
               if (userScore===5){return console.log('you win the game.');}
         
        } else if  ((computerSelection==='rock'&& playerSelection==='scissor')
    || (computerSelection==='paper'&& playerSelection==='rock')
    || (computerSelection==='scissor'&& playerSelection==='paper'))
    {
         compScore +=1 
         roundResult = ('You lose!! '+ computerSelection + " wins " + playerSelection + ' current result- you:'+ userScore +' - computer:'+ compScore);
           // if(compScore===5){alert('you lose the game'); break}
         
     } else {
         roundResult= 'Tie!! you and the computer chose '+ computerSelection+ ' Score is you:' + userScore + ` - computer:`+ compScore  ;
         
     }
    
    round.textContent = roundResult ;
    com.textContent = computerSelection;
    endGame()
        } 

       // let declareResult = ''
        function endGame  (){
   
   
    if (userScore==5){  finalResult.textContent+= 'you win';   disableButtons()}
    if (compScore==5){    finalResult.textContent+= 'you lose the game'; disableButtons() }
    finalResult.textContent
}        


 const rockBtn = document.querySelector('.rock')
 rockBtn.addEventListener('click',()=> singleRound(0))
        
 const paperBtn = document.querySelector('.paper')
 paperBtn.addEventListener('click',()=>singleRound(1))
 const scissorBtn = document.querySelector('.scissor')
 scissorBtn.addEventListener('click',()=>singleRound(2))
        
const round=document.querySelector('.round')
round.textContent= ''
const com = document.querySelector('.com')
com.textContent=''

const buttons = document.querySelectorAll('button')
const finalResult = document.querySelector('.finalResult')
finalResult.textContent = ''

function disableButtons(){
    rockBtn.setAttribute('disabled','disabled')
    paperBtn.setAttribute('disabled','disabled')
    scissorBtn.setAttribute('disabled','disabled')
    
}

function playAgain(){
    rockBtn.removeAttribute
    paperBtn.removeAttribute
    scissorBtn.removeAttribute;
    let userScore = 0;
    let compScore = 0 ;}



               