let score = JSON.parse(localStorage.getItem('score')) || {
  Wins : 0,
  Losses : 0,
  Ties : 0
};

updateScoreElement();

// if(score === null)
// {
//   score = {
//     Wins : 0,
//     Losses : 0,
//     Ties : 0
//   };
// }

function pickComputerMove()
{
  let computerMove ='';
  const randomNum = Math.random(); /* variable to store random number generated from the in-built function Math.random()*/

  if(randomNum >= 0 && randomNum < 1/3)
  {
    computerMove = `rock`;
  }
  else if(randomNum >= 1/3 && randomNum < 2/3)
  {
    computerMove = `paper`;
  }
  else if(randomNum >= 2/3 && randomNum <1){
    computerMove = `scissors`;
  }
  return computerMove;
}


function playGame(yourMove)
{
  let computerMove = pickComputerMove();

  result = '';

  if (yourMove === 'scissors')
  {
    if(computerMove === 'scissors')
    {
      result = 'Tie';
    }
    else if(computerMove === 'rock')
    {
      result = 'You Lose';
    }
    else if(computerMove === 'paper')
    {
      result = 'You Won';
    }
  }


  else if (yourMove === 'rock')
  {
    if(computerMove === 'rock')
    {
      result = 'Tie';
    }
    else if(computerMove === 'paper')
    {
      result = 'You Lose';
    }
    else if(computerMove === 'scissors')
    {
      result = 'You Won';
    }
  }


  else
  {
    if(computerMove === 'paper')
    {
      result = 'Tie';
    }
    else if(computerMove === 'scissors')
    {
      result = 'You Lose';
    }
    else if(computerMove === 'rock')
    {
      result = 'You Won';
    }
  }

  
  // Update score 👇👇👇👇👇
  if (result === 'You Won')
  {
    score.Wins += 1;
  }
  else if (result === 'You Lose')
  {
    score.Losses += 1;
  }
  else if (result === 'Tie')
  {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-moves').innerHTML = `You  
  <img src="images/${yourMove}-emoji.png" class="move-img">
  <img src="images/${computerMove}-emoji.png" class="move-img">
  Computer`;

}

function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `\nwins: ${score.Wins} ,Losses: ${score.Losses} ,Ties: ${score.Ties}`;
}
