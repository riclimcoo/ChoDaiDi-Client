interface PlayerElement extends HTMLLIElement{
    player?:Player;
}

const PLAYER_LIST_ELEMENT = document.querySelector('#players-list') as HTMLUListElement;

function createPlayerElement(player: Player, myname?: string):PlayerElement{
    const el:PlayerElement = document.createElement('li');
    el.player = player;
    el.classList.add('list-group-item');
    el.append(document.createTextNode(player.name+" "));
    
    if (!player.has_won){
        // Handsize Badge
        const handsize_badge = document.createElement('span');
        handsize_badge.classList.add('badge', 'bg-secondary');
        handsize_badge.innerText = `${player.handsize} Cards`;
        el.append(handsize_badge);
    }
        
    // You Badge
    console.log(`myname is ${myname} and playername is ${player.name}`)
    if (player.name == myname){
        const badge = document.createElement('span');
        badge.classList.add('badge', 'bg-primary');
        badge.innerText = 'You';
        el.append(badge);
    }

    // Open Badge
    if (player.is_open){
        let badge = document.createElement('span');
        badge.classList.add('badge', 'bg-success');
        badge.innerText = 'Open';
        el.append(badge);
    }

    // Winner Badge
    if (player.has_won){
        let badge = document.createElement('span');
        badge.classList.add('badge', 'bg-success');
        badge.innerText = 'Winner';
        el.append(badge);
    }

    // Skipped Player
    if (player.has_skipped){
        el.classList.add('disabled', 'bg-light');
    }

    if (player.is_active){
        el.classList.add('active');
    }
    return el;
}

export interface Player {
    name: string;
    handsize: number;
    is_open: boolean;
    is_active: boolean;
    has_won: boolean;
    has_skipped: boolean;
    element?: PlayerElement;
}

export function renderPlayers(players:Array<Player>, myname?:string): void{
    PLAYER_LIST_ELEMENT.innerHTML = '';
    for (const player of players){
        console.log(player);
        player.element = createPlayerElement(player, myname);
        PLAYER_LIST_ELEMENT.appendChild(player.element);
    }
}

// function test(){
//     let players:Array<Player> = [
//         {
//             name: "Winner",
//             handsize: 13,
//             is_open: false,
//             is_active: false,
//             has_won: true,
//             has_skipped: false,
//         },
//         {
//             name: "Active Player",
//             handsize: 11,
//             is_open: false,
//             is_active: true,
//             has_won: false,
//             has_skipped: false,
//         },
//         {
//             name: "Skipped Player",
//             handsize: 1,
//             is_open: false,
//             is_active: false,
//             has_won: false,
//             has_skipped: true,
//         }
//     ]
//     renderPlayers(players);
// }

// test();