const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Hey pls try again!');
    }
  };
  
  //console.log(getUserChoice('paper'));
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
       return 'rock';
       break;
      case 1:
        return 'paper';
        brea;
      case 2:
        return 'scissors';
        break;
      default:
        console.log('Pls try again!');
        break;
    }
  }
  
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game is a tie';
    } else {
      if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'Computer won!';
        } else {
          return 'User won!';
        }
      }
      if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'Computer won!';
        } else return 'User won!';
      }
      if (userChoice === 'scissors'){
        if(computerChoice === 'paper'){
          return 'User won!';
        } else return 'Computer won!';
      }
    }
  }
  
  //console.log(determineWinner('paper', 'rock'));
  
  function playGame() {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log('User choose: ' + userChoice);
    console.log('Computer choose: '+ computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();