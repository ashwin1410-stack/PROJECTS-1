let PRE = document.getElementById("PREVIOUS")
let countEl = document.getElementById("H2")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    PRE.textContent += countStr
    countEl.textContent = 0
    count = 0
}

