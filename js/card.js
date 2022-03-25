const valToStr = {
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
};
const suitToStr = {
    'C': 'Clubs',
    'S': 'Spades',
    'H': 'Hearts',
    'D': 'Diamonds'
};
;
;
function makeElement(card) {
    const el = document.createElement('div');
    el.classList.add('playing-card');
    el.style.backgroundImage = `url(./deck/${card.code}.png)`;
    el.card = card;
    el.selected = false;
    return el;
}
export function getCard(code) {
    const card = {};
    card.code = code;
    card.value = code[0];
    card.suit = code[1];
    card.value_str = valToStr[card.value];
    card.suit_str = suitToStr[card.suit];
    card.name = `${card.value_str} of ${card.suit_str}`;
    card.element = makeElement(card);
    return card;
}
