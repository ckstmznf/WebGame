let PLAYER_WIDTH = 50;
let PLAYER_HEIGHT = 50;
let PLAYER_SPEED = 50;

let isMoving = false

let player = document.querySelector(".player")

let playerPos = {
    x : 0, y : window.innerHeight - PLAYER_HEIGHT,
    rotate : 0
}

// document.querySelector(".game-screen").appendChild(p)

gamaInit()

setInterval(()=>{
    player.style.width = PLAYER_WIDTH + "px"
    player.style.height = PLAYER_HEIGHT + "px"

    document.querySelector(".window-width").innerHTML = `${window.innerWidth}px,`
    document.querySelector(".window-height").innerHTML = `${window.innerHeight}px,`
    document.querySelector(".player-x").innerHTML = `${playerPos.x}px,`
    document.querySelector(".player-y").innerHTML = `${playerPos.y}px,`
}, 1)

window.onkeydown = (e) => {
    // alert(e.key)
    // if(isMoving) return

    if(e.key ===  "ArrowUp") {
        isMoving = true

        if (playerPos.y - PLAYER_SPEED >= 0) {
            playerPos.y -= PLAYER_SPEED;
        } else {
            playerPos.y = 0
        }
    }
    else if(e.key === "ArrowDown"){
        isMoving = true

        if(playerPos.y + PLAYER_SPEED + PLAYER_HEIGHT <= window.innerHeight){
            playerPos.y += PLAYER_SPEED;
        }
        else {
            playerPos.y = window.innerHeight - PLAYER_HEIGHT
        }
    }
    else if(e.key === "ArrowLeft"){
        isMoving = true

        if(playerPos.x  - PLAYER_SPEED >= 0){
            playerPos.x -= PLAYER_SPEED;
        }
        else {
            playerPos.x = 0;
        }
    }
    else if(e.key === "ArrowRight"){
        isMoving = true

        if(playerPos.x + PLAYER_WIDTH + PLAYER_SPEED <= window.innerWidth){
            playerPos.x += PLAYER_SPEED;
        }
        else {
            playerPos.x = window.innerWidth - PLAYER_WIDTH
        }
    }
    else if(e.code === "Space") {
        isMoving = true
        playerPos.rotate += 90;
    }

    if(isMoving){
        player.setAttribute("x", playerPos.x);
        player.setAttribute("y", playerPos.y);
        player.setAttribute("rotate", playerPos.rotate);

        setTimeout(()=>{
            isMoving = false;
        }, 400)
    }
}

function gamaInit() {
    player.setAttribute("x", playerPos.x);
    player.setAttribute("y", playerPos.y);
    player.setAttribute("rotate", playerPos.rotate);

    player.style.width = PLAYER_WIDTH + "px"
    player.style.height = PLAYER_HEIGHT + "px"
}