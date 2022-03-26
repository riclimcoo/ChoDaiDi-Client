import { getCard, CardElement, Card } from './card.js';

export let SELECTED:Array<Card> = [];
const HAND_ELEMENT = document.getElementById('hand') as HTMLDivElement;
const COMBO_ELEMENT = document.getElementById('combo') as HTMLDivElement;
const LABEL_ELEMENT = document.getElementById('combo-label') !;

function makeClickable(el: CardElement){
    el.onclick = () => {
        if (el.selected){
            el.selected = false;
            el.classList.remove('selected-card');
            SELECTED = SELECTED.filter((item) => (item.code !== el.card?.code))
        } else {
            el.selected = true;
            el.classList.add('selected-card');
            SELECTED.push(el.card !);
        }
        console.log(SELECTED);
    }
}

export function renderHand(cards: Array<string>){
    SELECTED = [];
    HAND_ELEMENT.innerHTML = "";
    for (const card of cards){
        const card_obj = getCard(card);
        makeClickable(card_obj.element);
        HAND_ELEMENT.appendChild(card_obj.element);
    }
}

export function renderCombo(label: string, cards: Array<string>){
    COMBO_ELEMENT.innerHTML = "";
    LABEL_ELEMENT.innerText = label;
    for (const card of cards){
        const card_obj = getCard(card);
        COMBO_ELEMENT.appendChild(card_obj.element);        
    }
}

export function getSelectedCards():Array<string>{
    const cards = []
    for (const card of SELECTED){
        cards.push(card.code);
    }
    return cards
}
