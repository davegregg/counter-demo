let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

console.log(incrementButton)
console.log(decrementButton)
console.log(countView)

function onIncrement (event) {
    console.log(event)
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount + 1

    countView.textContent = newCount
}

function onDecrement (event) {
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount - 1

    countView.textContent = newCount
}

incrementButton.addEventListener("click", onIncrement) // callback
decrementButton.addEventListener("click", onDecrement)
// synchronous vs. asynchronous programming???

function onKeypress (event) {
    console.log(event.key)
    if (event.key === "ArrowRight") {}
    if (event.key === "ArrowLeft") {}
}

document.addEventListener("keydown", onKeypress)