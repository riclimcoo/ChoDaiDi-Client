"use strict";
function enlarge(card) {
    card.classList.add("hovered-card");
}
function shrink(card) {
    card.classList.remove("hovered-card");
}
function handlehover(x, y) {
    const hand = document.getElementById('hand');
    let cards = hand.getElementsByClassName("playing-card");
    // let bound = hand.getBoundingClientRect();
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let rect = card.getBoundingClientRect();
        let topBound = rect.top;
        let botBound = rect.bottom;
        let leftBound = rect.left;
        let rightBound = rect.right;
        if (i < cards.length - 1 &&
            cards[i + 1].getBoundingClientRect().right > rightBound) {
            let adjacentcard = cards[i + 1];
            let rect2 = adjacentcard.getBoundingClientRect();
            rightBound = rect2.left;
        }
        if (y < topBound || y > botBound) {
            shrink(card);
        }
        else if (x > leftBound && x <= rightBound) {
            enlarge(card);
        }
        else {
            shrink(card);
        }
    }
}
document.onmousemove = (e) => (handlehover(e.clientX, e.clientY));
