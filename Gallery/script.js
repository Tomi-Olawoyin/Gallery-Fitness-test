const imgName = document.querySelectorAll("#imgname")

imgName.forEach(x => x.addEventListener("click", (event) => {
  event.target.style.color = "black"
  event.target.style.background = "#c9325d"
  event.target.style.fontWeight = "bold"
}))