function enlarge(card: Element){
    card.classList.add("hovered-card")
}

function shrink(card: Element){
    card.classList.remove("hovered-card")
}

function handlehover(x: number, y: number){
    const hand = document.getElementById('hand') as HTMLDivElement;
    let cards = hand.getElementsByClassName("playing-card");
    // let bound = hand.getBoundingClientRect();
    
    for (let i = 0; i < cards.length; i++){
        let card = cards[i];
        let rect = card.getBoundingClientRect();
        let topBound = rect.top;
        let botBound = rect.bottom;
        let leftBound = rect.left;
        let rightBound = rect.right;
        if (i < cards.length-1 && 
            cards[i+1].getBoundingClientRect().right > rightBound){
            let adjacentcard = cards[i+1];
            let rect2 = adjacentcard.getBoundingClientRect();
            rightBound = rect2.left;
        } 
        if (y < topBound || y > botBound){
            shrink(card);
        }
        else if (x > leftBound && x <= rightBound){
            enlarge(card);
        }
        else{
            shrink(card);
        }
    }
}

document.onmousemove = (e) => (handlehover(e.clientX, e.clientY));
