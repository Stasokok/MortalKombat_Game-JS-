const player1 = {
	name: 'Scorpion',
	hp: '80%',
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['chain', 'fireball'],
	attack: function() {
		console.log(player1.name + ' Fight...')
	}

}

const player2 = {
	name: 'SubZero',
	hp: '100%',
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['icesword', 'iceball'],
	attack: function() {
		console.log(player2.name + ' Fight...')
	}

}

function createPlayer(player, name, img, hp) {
	const $player = document.createElement('div');
	$player.classList.add(player);
	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');
	$player.appendChild($progressbar);
	const $character = document.createElement('div');
	$character.classList.add('character');
	$player.appendChild($character);
	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = hp;
	$progressbar.appendChild($life);
	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = name;
	$progressbar.appendChild($name);
	const $img = document.createElement('img');
	$img.src = img;
	$character.appendChild($img);
	const $arenas = document.querySelector('.arenas');
	$arenas.appendChild($player);


}
createPlayer('player1', player1['name'], player1['img'], player1['hp']);
createPlayer('player2', player2['name'], player2['img'], player2['hp']);
