// radomize movie quote when clicked
// target the container to genorate random quote
//style better
// randomizor

var quoteDisplayEl = document.getElementById("movie-quote-container");

function quote() {
  fetch("https://the-one-api.dev/v2/quote", {
    headers: { Authorization: "bearer EG4f6juh1PF0X82amiv_" },
  })
    .then((response) => response.json())
    .then((data) => {
      for (var index = 0; index < data["docs"].length; index++) {
        console.log(data["docs"][index]["dialog"]);
        var quotes = document.createElement("div");
        quotes.textContent = data["docs"][index]["dialog"];
        quoteDisplayEl.appendChild(quotes);
      }
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
