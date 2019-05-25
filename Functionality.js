function start (playerHand){
	var opponentHand;
	var resultString;
	
	var randomRoll= Math.floor(Math.random() * 5);
	
	
	switch (randomRoll){
		case 0:
			opponentHand = "Rock";
			switch (playerHand){
				case "Paper":
					resultString="Paper covers Rock. Player wins!"
					break;
					
				case "Spock":
					resultString="Spock vaporizes Rock. Player wins!"
					break;
					
				case "Scissors":
					resultString="Rock crushes Scissors. AI wins!"
					break;
					
				case "Lizard":
					resultString="Rock crushes Lizard. AI wins!"
					break;
					
				default:
					resultString="Tie. No winner!"
					break;
			}
			break;
			
		case 1:
			opponentHand = "Paper";
			switch (playerHand){
				case "Scissors":
					resultString="Scissors cuts Paper. Player wins!"
					break;
					
				case "Lizard":
					resultString="Lizard eats Paper. Player wins!"
					break;
					
				case "Rock":
					resultString="Paper covers Rock. AI wins!"
					break;
					
				case "Spock":
					resultString="Paper disproves Spock. AI wins!"
					break;
					
				default:
					resultString="Tie. No winner!"
					break;
			}
			break;
			
		case 2:
			opponentHand = "Scissors";
			switch (playerHand){
				case "Rock":
					resultString="Rock crushes Scissors. Player wins!"
					break;
					
				case "Spock":
					resultString="Spock smashes Scissors. Player wins!"
					break;
					
				case "Paper":
					resultString="Scissors cuts Paper. AI wins!"
					break;
					
				case "Lizard":
					resultString="Scissors decapitates Lizard. AI wins!"
					break;
					
				default:
					resultString="Tie. No winner!"
					break;
			}
			break;
			
		case 3:
			opponentHand = "Lizard";
			switch (playerHand){
				case "Rock":
					resultString="Rock crushes Lizard. Player wins!"
					break;
					
				case "Scissors":
					resultString="Scissors decapitates Lizard. Player wins!"
					break;
					
				case "Paper":
					resultString="Lizard eats Paper. AI wins!"
					break;
					
				case "Spock":
					resultString="Lizard poisons Spock. AI wins!"
					break;
					
				default:
					resultString="Tie. No winner!"
					break;
			}
			break;
			
		case 4:
			opponentHand = "Spock";
			switch (playerHand){
				case "Paper":
					resultString="Paper disproves Spock. Player wins!"
					break;
					
				case "Lizard":
					resultString="Lizard poisons Spock. Player wins!"
					break;
					
				case "Scissors":
					resultString="Spock smashes Scissors. AI wins!"
					break;
					
				case "Rock":
					resultString="Spock vaporises Rock. AI wins!"
					break;
					
				default:
					resultString="Tie. No winner!"
					break;
			}
			break;	
	};
	
	var resultDiv = document.getElementById("Results");
	
	resultDiv.innerHTML = "<h3>Player has chosen "+playerHand+".<br><br>Oppenent has chosen "+opponentHand+".<br><br>"+resultString+"</h3>"
};