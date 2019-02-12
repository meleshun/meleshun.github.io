$(document).ready(function(){

var groupCards = []; // Массив из 9 (a+1) карт для создания выборки
var cards= [];

function partGame(a) {
	cards = [
	"clubs_2",
	"clubs_3",
	"clubs_4",
	"clubs_5",
	"clubs_6",
	"clubs_7",
	"clubs_8",
	"clubs_9",
	"clubs_10",
	"clubs_jack",
	"clubs_queen",
	"clubs_king",
	"clubs_ace",
	"diamonds_2",
	"diamonds_3",
	"diamonds_4",
	"diamonds_5",
	"diamonds_6",
	"diamonds_7",
	"diamonds_8",
	"diamonds_9",
	"diamonds_10",
	"diamonds_jack",
	"diamonds_queen",
	"diamonds_king",
	"diamonds_ace",
	"hearts_2",
	"hearts_3",
	"hearts_4",
	"hearts_5",
	"hearts_6",
	"hearts_7",
	"hearts_8",
	"hearts_9",
	"hearts_10",
	"hearts_jack",
	"hearts_queen",
	"hearts_king",
	"hearts_ace",
	"spades_2",
	"spades_3",
	"spades_4",
	"spades_5",
	"spades_6",
	"spades_7",
	"spades_8",
	"spades_9",
	"spades_10",
	"spades_jack",
	"spades_queen",
	"spades_king",
	"spades_ace",
	];

	for(; a>=0; a--) {
		var rand = Math.floor(Math.random() * cards.length); 
		groupCards[groupCards.length] = cards[rand];
		cards.splice( rand, 1) // Удалить взятый элемент из массива
	} // Генерирую 9 (а+1) карт в массив groupCrads для дальнейшей выборки 

};

var numElem = 0; // 

function issuanceСards(b) { // Вызов карт из groupCards

	for (; b>= 0; b--) {
		var createClass = '.card_' + numElem; // Выбираем класс для присвоения другого класса

		$(createClass).addClass(groupCards[b]);
		groupCards.splice(b, 1) // Удаляем из массива
		numElem++;
	}
}


partGame(8); // вызываем генерацию массива groupCards с 9 картами




$(".buttonStart").click(function(){

	if (groupCards.length == 9) {
		issuanceСards(3);
		$('.card_0, .card_1, .card_2, .card_3').toggleClass('disable');
	} else if (groupCards.length == 5){
		issuanceСards(2);
	} else if (groupCards.length == 2){
		issuanceСards(0);
	} else if (groupCards.length == 1){
		issuanceСards(0);
	} else {
		location.reload();
	}
});

$('.playerOne').click(function(){
	$('.card_0, .card_1').toggleClass('disable');
});
$('.playerTwo').click(function(){
	$('.card_2, .card_3').toggleClass('disable');
});
});