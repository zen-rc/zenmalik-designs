///////psudeo code//////
////set up what happens in each function
/// insert event listeners and calls


//variables////
let botScore = 0
let	playerScore = 0

const	rocklee = document.getElementById('rock')
const	paperlee = document.getElementById('paper')
const	scissorlee = document.getElementById('scissors')

////functions////

///play////
function playerThrowsRock(){
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function playerThrowsPaper(){
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}

////weapon generator///////
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}

///scores////
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Look at that! a tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore = botScore + 1;
	document.getElementById("computerScore").innerText= botScore;
	displayCompleteMessage("Sorry! Better Luck Next Time");
}
function increasePlayerScore(){
	playerScore = playerScore + 1
	document.getElementById('humanScore').innerText = playerScore
	displayCompleteMessage("Yay! You're a Winner")


}
////displaying score/////
function displayCompleteMessage(msg){
	document.getElementById("status").innerText = msg;
}
	////call////
	rocklee.addEventListener('click', playerThrowsRock)
	paperlee.addEventListener('click', playerThrowsPaper)
	scissorlee.addEventListener('click', playerThrowsScissors)



























