const toggle = document.getElementById("toggle")
const open = document.getElementById("open")
const close = document.getElementById("close")
const modal = document.getElementById("modal")

//toggle

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav")
})

//open modal
open.addEventListener("click", () => {
  modal.classList.add("show-modal")
})

//close modal
close.addEventListener("click", () => {
  modal.classList.remove("show-modal")
})

//on click of outside window click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
)
