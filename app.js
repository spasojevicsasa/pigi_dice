
var scores, roundScore, activePlayer, gamePlaying, lastDice ;

init();
document.querySelector('.dice_1').style.display = 'none';
document.querySelector('.dice_2').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function() { 
	if (gamePlaying) {
		var dice_1 = Math.floor(Math.random() * 6) + 1;
		var dice_2 = Math.floor(Math.random() * 6) + 1;

		var diceDOM1 = document.querySelector('.dice_1');
		var diceDOM2 = document.querySelector('.dice_2');
		diceDOM1.style.display = 'block';
		diceDOM2.style.display = 'block';
		diceDOM1.src = `dice-${dice_1}.png`;
		diceDOM2.src = `dice-${dice_2}.png`;

		 if (dice_1 !== 1 && dice_2 !== 1) {
			roundScore += dice_1+dice_2;
			console.log(roundScore);
			document.querySelector('#curent-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}     

});

document.querySelector('.btn-hold').addEventListener('click', function() {

	if (gamePlaying) {
		scores[activePlayer] += roundScore;

		document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
	 
		var winningScore;

		if (input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}


		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!!!';
			document.querySelector('.dice_1').style.display = 'none';
			document.querySelector('.dice_2').style.display = 'none';
			document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}else{
			nextPlayer();
		}

	}

});



function nextPlayer() {
	 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		 roundScore = 0;

		 document.getElementById('curent-0').textContent = '0';
		 document.getElementById('curent-1').textContent = '0';

		 document.querySelector('.player-0-panel').classList.toggle('active');
		 document.querySelector('.player-1-panel').classList.toggle('active');

		 document.querySelector('.dice_1').style.display = 'none';
		 document.querySelector('.dice_2').style.display = 'none';
		}


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
	gamePlaying = true;
	scores = [0,0];
	roundScore =0;
	activePlayer = 0;

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('curent-0').textContent = '0';
	document.getElementById('curent-1').textContent = '0';
    
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	
}
