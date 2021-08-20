let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

console.log(incrementButton)
console.log(decrementButton)
console.log(countView)

// click event handler
function onIncrement (event) {
    console.log(event)
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount + 1

    countView.textContent = newCount
}

// click event handler
function onDecrement (event) {
    console.log(event)
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount - 1

    countView.textContent = newCount
}

incrementButton.addEventListener("click", onIncrement) // callback
decrementButton.addEventListener("click", onDecrement)
// synchronous vs. asynchronous programming???

// event handler, currently unused
function onKeypress (event) {
    console.log(event.key)
    if (event.key === "ArrowRight") {}
    if (event.key === "ArrowLeft") {}
}

// event handler
function printKey (event) {
    document.body.append(event.key)
}

document.addEventListener("keydown", printKey) // callback






let form = document.querySelector("#login-form")
let usernameInputElement = document.querySelector("[name='username']")
let emailInputElement = document.querySelector("[name='email']")

function onLogin (event) {
    event.preventDefault()

    let username = usernameInputElement.value
    let email = emailInputElement.value
    let birthday = form[2].value

    // Another approach to the above,
    // which would not require querySelector,
    // and is more readable than `form[index]`:
    //     let loginData = new FormData(event.target)
    //     let username = loginData.get("username")
    //     let email = loginData.get("email")
    //     let birthday = loginData.get("birthday")

    document.body.append(username)
    console.log(username)
    console.log(email)
    console.log(birthday)
}

form.addEventListener("submit", onLogin)
