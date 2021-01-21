const gameStart = document.querySelector(".game_icon")

function goGame() {
    location.href="game.html"
}

gameStart.addEventListener("click", goGame)