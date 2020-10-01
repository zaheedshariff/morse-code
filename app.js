let inputBox = document.getElementById("morsebox")
let btn = document.getElementById('btn')
let translation = document.getElementById('translation')

btn.addEventListener('click', translateMe)

function translateMe(e) {
    if (inputBox.value === "abc") {
        translation.textContent = ". _ _... _._."
    } if (inputBox.value === "a") {
        translation.textContent = ". _"
    } if (inputBox.value === "b") {
        translation.textContent = "_ ..."
    } if (inputBox.value === "c") {
        translation.textContent = "_ ._."
    }
    inputBox.value = ""
}