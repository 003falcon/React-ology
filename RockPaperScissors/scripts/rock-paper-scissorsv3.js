//Removed onclick attributes and 
//replaced it with eventListeners
//also changed non hoisted func to arrow functions

let score= JSON.parse(localStorage.getItem('Score'))||{
  wins:0,
  losses:0,
  ties:0
};
// if(score.wins>=20)
// {
//   alert("Congrats! That did take quite a while ,didn't it? Here , access code is RandomState=42");
// }
/*method 2
if(!score)
{
score ={
  wins:0,
  losses:0,
  ties:0
  };
  }*/
//docqueryshorthand(game-result,res);
//docqueryshorthand(moves-display,res);

updateScore();
let intervalId;

function autoPlay()
{
  const elem=document.querySelector('.auto-play-button');
  if(elem.classList.contains('autoPlaying'))
  {   document.querySelector('.autoPlaying').innerHTML = 'AutoPlay';
      elem.classList.remove('autoPlaying');
      clearInterval(intervalId);
  }
  else
  {   elem.classList.add('autoPlaying');
      document.querySelector('.autoPlaying').innerHTML = 'Stop Play';
      intervalId=setInterval(()=>pickPlayerMoveandPlay(),1000);
  } 
}

function pickPlayerMoveandPlay()
{
  let playerMove=pickComputerMove();
  playGame(playerMove);
}

function updateScore()
{
  document.querySelector('.score-display').innerHTML= 
`|Wins: ${score.wins} |Losses: ${score.losses} |Ties: ${score.ties}|`;
}

document.querySelector('.rock').addEventListener('click',()=>{playGame('rock')});
//note: simply playGame('rock') will not run function as the eventListener takes the return value of the second param,
//so the func is enclosed in an   arrow one line function is

document.querySelector('.paper').addEventListener('click',()=>{playGame('paper')});
document.querySelector('.scissors').addEventListener('click',()=>{playGame('scissors')});

function resetScore()
{
  let flag=false;

  let htmlELem=`
    <div>Are you sure you want to reset the score?</div>
    <button class="yes-reset">Yes</button>
    <button class="no-reset">No</button>
    `;

  document.querySelector('.confirmation-msg').innerHTML=htmlELem;
  htmlELem='';
  document.querySelector('.yes-reset').addEventListener('click',()=>{
    
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('Score');
    updateScore();
    document.querySelector('.confirmation-msg').innerHTML=htmlELem;
  });
  document.querySelector('.no-reset').addEventListener('click',()=>{
    
    document.querySelector('.confirmation-msg').innerHTML=htmlELem;

  })
}

document.querySelector('.reset-icon').addEventListener('click',()=>{
 resetScore(); 
});
document.querySelector('.auto-play-button').addEventListener('click',()=>{
  autoPlay();
})

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='a')
    autoPlay();
  if(event.key==='Backspace')
    resetScore();
  if(event.key==='r')
    playGame('rock');
  if(event.key==='p')
    playGame('paper');
  if(event.key==='s')
    playGame('scissors');
});


function playGame(yourMove)
{
  const computerMove=pickComputerMove();


  let res='';
  if(yourMove==='scissors')
  {
    if(computerMove==='scissors')
      res='Tie';
    else if(computerMove==='rock')
      res='Computer Wins.'
    else
      res='You Win!';

  }
  else if(yourMove==='paper')
  {
    if(computerMove==='paper')
      res='Tie';
    else if(computerMove==='scissors')
      res='Computer Wins.'
    else
      res='You Win!';

  }
  else
  {
    if(computerMove==='rock')
      res='Tie';
    else if(computerMove==='paper')
      res='Computer Wins.'
    else
      res='You Win!';

  }

  if(res==='Tie')
    score.ties++;
  else if (res==='Computer Wins.')
    score.losses++;
  else
    score.wins++;
  
  localStorage.setItem('Score', JSON.stringify(score));
  if(score.wins>=20)
{
  alert("Congrats! That did take quite a while ,didn't it? Here , access code is RandomState=42");
}

  docqueryshorthand('game-result',res);
  //document.querySelector('.game-result').innerHTML =      `${res}`;
  
  docqueryshorthand('moves-display',`You <img src="imgs/${yourMove}-emoji.png" class="icon"> <img src="imgs/${computerMove}-emoji.png" class="icon"> Computer`);
 

  updateScore();
  
  /*alert(`You picked ${yourMove}. Computer picked ${computerMove}.${res}
        |Wins: ${score.wins} |Losses: ${score.losses} |Ties: ${score.ties}|`) */    

}
function docqueryshorthand(_button,msg)
{
  document.querySelector(`.${_button}`).innerHTML =msg;

}
function pickComputerMove()
{
  
  let computerMove='';
  const num=Math.random();
  if(num>=0 && num<1/3)
  computerMove='rock';
  else if(num>=1/3 && num<2/3)
  computerMove='paper'
  else 
  computerMove='scissors';
  return computerMove;
}
