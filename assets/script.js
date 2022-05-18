// radomize movie quote when clicked
// target the container to genorate random quote
//style better
// randomizor

var quoteDisplayEl = document.getElementById("movie-quote-container");

function randomIndex() {
  return Math.floor(Math.random() * 1000);
}

function quote() {
  quoteDisplayEl.innerHTML = "";

  fetch("https://the-one-api.dev/v2/quote", {
    headers: { Authorization: "bearer EG4f6juh1PF0X82amiv_" },
  })
    .then((response) => response.json())
    .then((data) => {
      var singleQuote = data["docs"][randomIndex()];
      var quotes = document.createElement("div");
      quotes.textContent = singleQuote.dialog;
      quoteDisplayEl.appendChild(quotes);
    });
}

document.getElementById("ring-title").addEventListener("click", elvishFont);
function elvishFont() {
  var selection = document.getElementById("body");
  if (selection.style.fontFamily == "Tangerine") {
    selection.style.fontFamily = "elvish_ring_nfiregular";
  } else {
    selection.style.fontFamily = "Tangerine";
  }
}
