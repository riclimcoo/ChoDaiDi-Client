const valToStr:any = {
    'A': 'Ace',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    'X': 'Ten',
    'J': 'Jack',
    'Q': 'Queen',
    'K': 'King',
}

const suitToStr:any = {
    'C': 'Clubs',
    'S': 'Spades',
    'H': 'Hearts',
    'D': 'Diamonds'
}

export interface Card {
    card: Card;
    code: string,
    value: string,
    suit: string,
    name: string,
    value_str: string,
    suit_str: string,
    element: CardElement
};

export interface CardElement extends HTMLDivElement {
    card?: Card
    selected?: boolean
};

function makeElement(card: Card): CardElement{
    const el:CardElement = document.createElement('div');
    el.classList.add('playing-card');
    el.style.backgroundImage = `url(./deck/${card.code}.png)`;
    el.card = card;
    el.selected = false;
    return el;
}

export function getCard(code: string): Card{
    const card:any = {};
    card.code = code;
    card.value = code[0];
    card.suit = code[1];
    card.value_str = valToStr[card.value];
    card.suit_str = suitToStr[card.suit];
    card.name = `${card.value_str} of ${card.suit_str}`;
    card.element = makeElement(card);
    return card;
}