import {Deck} from './deck.js'

let list = null;
let deck = null;

$(function() {

  list = $('#deck');

  deck = new Deck()
  deck.build();

  show(deck);

  $('#shuffle').click(() => {
    deck.shuffle()

    show(deck)
  })


});

function show(deck) {
  list.empty();
  deck.cards.forEach((card) => {
    list.append(getCardListTime(card));
  });
}




function getCardListTime(card) {
  const {color, html, type} = card.suit;
  const {number, symbol} = card.value;
  const displayValue = symbol || number;

  return `<li class='card ${type}'><span style='color: ${color};'>${html} ${displayValue}</span></li>`;
}
