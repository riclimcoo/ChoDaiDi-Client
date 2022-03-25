import {renderCombo, renderHand} from "./select.js"
import {Player, renderPlayers} from "./player.js"

export function render(myname : string, gameState: any) {
    renderPlayers(gameState.players, myname);
    renderCombo(gameState.last_combo_label, gameState.last_combo);
    const filtered = gameState.players.filter((player : Player) => player.name == myname);
    const me = filtered[0];
    if (me) 
        renderHand(me.hand);
    else
        renderHand([]);
}

