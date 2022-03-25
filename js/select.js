import { getCard } from './card.js';
export let SELECTED = [];
const HAND_ELEMENT = document.getElementById('hand');
const COMBO_ELEMENT = document.getElementById('combo');
const LABEL_ELEMENT = document.getElementById('combo-label');
function makeClickable(el) {
    el.onclick = () => {
        if (el.selected) {
            el.selected = false;
            el.classList.remove('selected-card');
            SELECTED = SELECTED.filter((item) => { var _a; return (item.code !== ((_a = el.card) === null || _a === void 0 ? void 0 : _a.code)); });
        }
        else {
            el.selected = true;
            el.classList.add('selected-card');
            SELECTED.push(el.card);
        }
        console.log(SELECTED);
    };
}
export function renderHand(cards) {
    SELECTED = [];
    HAND_ELEMENT.innerHTML = "";
    for (const card of cards) {
        const card_obj = getCard(card);
        makeClickable(card_obj.element);
        HAND_ELEMENT.appendChild(card_obj.element);
    }
}
export function renderCombo(label, cards) {
    COMBO_ELEMENT.innerHTML = "";
    LABEL_ELEMENT.innerText = label;
    for (const card of cards) {
        const card_obj = getCard(card);
        COMBO_ELEMENT.appendChild(card_obj.element);
    }
}
export function getSelectedCards() {
    const cards = [];
    for (const card of SELECTED) {
        cards.push(card.code);
    }
    return cards;
}
renderHand(['JC', 'QS']);
renderCombo("Pair", ['AC', 'AS']);
