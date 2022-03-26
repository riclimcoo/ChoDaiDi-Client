import { render } from "./render.js";
import { getSelectedCards } from "./select.js";
import { alert } from "./warning.js";
const JOIN_BUTTON = document.getElementById('join-button');
const NAME_BOX = document.getElementById('name-box');
const START_BUTTON = document.getElementById('start-button');
const RESET_BUTTON = document.getElementById('reset-button');
const SKIP_BUTTON = document.getElementById('skip-button');
const PLAY_BUTTON = document.getElementById('play-button');
function getServerURL() {
    if (window.location.host === "riclimcoo.github.io") {
        return "wss://riclimcoo-cdd.herokuapp.com/";
    }
    else if (window.location.host === "localhost:5500" ||
        window.location.host === "127.0.0.1:5500") {
        return "ws://localhost:8001/";
    }
    else {
        throw new Error(`Unsupported host: ${window.location.host}`);
    }
}
let SOCKET = new WebSocket(getServerURL());
let MY_NAME;
SOCKET.onopen = function () {
    SOCKET.send(JSON.stringify({
        type: 'register'
    }));
};
SOCKET.onclose = function () {
    alert('Disconnected from server. Reconnecting...', "danger");
    setTimeout(() => {
        SOCKET = new WebSocket(getServerURL());
    }, 1000);
};
SOCKET.onerror = function () {
    alert('Could not connect to server. Reconnecting...', "danger");
    setTimeout(() => {
        SOCKET = new WebSocket(getServerURL());
    }, 1000);
};
JOIN_BUTTON.onclick = () => {
    MY_NAME = NAME_BOX.value;
    const event = {
        type: 'join',
        player: MY_NAME
    };
    SOCKET.send(JSON.stringify(event));
};
SKIP_BUTTON.onclick = function () {
    const event = {
        type: 'skip',
        player: MY_NAME
    };
    SOCKET.send(JSON.stringify(event));
};
START_BUTTON.onclick = function () {
    SOCKET.send(JSON.stringify({
        type: 'start'
    }));
};
RESET_BUTTON.onclick = function () {
    SOCKET.send(JSON.stringify({
        type: 'reset'
    }));
};
PLAY_BUTTON.onclick = function () {
    const event = {
        type: 'play',
        player: MY_NAME,
        cards: getSelectedCards()
    };
    SOCKET.send(JSON.stringify(event));
};
SOCKET.addEventListener('message', function (server_msg) {
    const event = JSON.parse(server_msg.data);
    if (event.type == "msg") {
        alert(event.msg, "success");
    }
    else if (event.type == "err") {
        alert(event.msg, "warning");
    }
    else if (event.type == "state") {
        render(MY_NAME, event);
    }
});
