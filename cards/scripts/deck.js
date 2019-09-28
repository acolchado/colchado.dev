import {Card} from './card.js'

export const Suits = [
  { type: 'diamonds', color: 'red', html: '&diams;'},
  { type: 'clubs', color: 'black', html: '&clubs;'},
  { type: 'hearts', color: 'red', html: '&hearts;'},
  { type: 'spades', color: 'black', html: '&spades;'},
];

export const Values = [
  {number: '1', symbol: 'Ace'},
  {number: '2'},
  {number: '3'},
  {number: '4'},
  {number: '5'},
  {number: '6'},
  {number: '7'},
  {number: '8'},
  {number: '9'},
  {number: '10'},
  {number: '11', symbol: 'Jack'},
  {number: '12', symbol: 'Queen'},
  {number: '13', symbol: 'King'}

];

export class Deck {
  constructor() {
    this.cards = [];
  }

  build() {

    Suits.forEach((suit) => {
      Values.forEach((value) => {
        const card = new Card(suit, value);
        this.cards.push(card);
      });
    })

    return this;
  }

  shuffle() {
    const array = this.cards;

    for (var i = array.length - 1; i > 0; i--) {
     var j = Math.floor(Math.random() * (i + 1));
     var temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }

   this.cards = array;
  }
}
