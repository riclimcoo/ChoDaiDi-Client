import { renderCombo, renderHand } from "./select.js";
import { renderPlayers } from "./player.js";
export function render(myname, gameState) {
    renderPlayers(gameState.players, myname);
    renderCombo(gameState.last_combo_label, gameState.last_combo);
    const filtered = gameState.players.filter((player) => player.name == myname);
    const me = filtered[0];
    if (me)
        renderHand(me.hand);
    else
        renderHand([]);
}
