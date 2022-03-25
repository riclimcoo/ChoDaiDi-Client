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
    let bound = hand.getBoundingClientRect();
    let topBound = bound.top;
    let botBound = bound.bottom;
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let rect = card.getBoundingClientRect();
        let leftBound = window.scrollX + rect.left;
        let rightBound = window.scrollX + rect.right;
        if (i < cards.length - 1) {
            let adjacentcard = cards[i + 1];
            let rect2 = adjacentcard.getBoundingClientRect();
            rightBound = window.scrollX + rect2.left;
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
