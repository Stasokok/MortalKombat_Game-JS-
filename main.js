const player1 = {
	name: 'Scorpion',
	hp: 100,
	img: ' ',
	weapon: ['chain', 'fireball'],
	attack: function() {
		console.log(player1.name + ' Fight...')
	}

}

const player2 = {
	name: 'SubZero',
	hp: 100,
	img: ' ',
	weapon: ['icesword', 'iceball'],
	attack: function() {
		console.log(player2.name + ' Fight...')
	}

}

function createPlayer() {
	const $player1 = document.createElement('div');
	$player1.classList.add('player1');
	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');
	$player1.appendChild($progressbar);
	const $character = document.createElement('div');
	$character.classList.add('character');
	$player1.appendChild($character);
	const $live = document.createElement('div');
	$live.classList.add('live');
	$progressbar.appendChild($live);
	const $name = document.createElement('div');
	$name.classList.add('name');
	$progressbar.appendChild($name);
	const $img = document.createElement('img');
	$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
	$character.appendChild($img);
	const $arenas = document.querySelector('.arenas');
	$arenas.appendChild($player1);


}
createPlayer('player1', player1['name','hp','img']);
createPlayer('player2', player2['name','hp','img']);
