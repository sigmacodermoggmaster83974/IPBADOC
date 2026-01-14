const cards = document.getElementsByClassName("credCard")

const next = document.getElementById("next")
let progress = 0
next.addEventListener("click", () => {
    if (progress+1 > cards.length - 1) {
        progress = 0
        cards[cards.length-1].classList.remove("show")
    }
    else {
progress++
cards[progress - 1].classList.remove("show")
    }
    cards[progress].classList.add("show")
})


