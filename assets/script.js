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
//-----------------------------------------
// 3 side character buttons
// Legolas side button
let legolasBtn = document.getElementById("legolas-button")
legolasBtn.addEventListener('click', function () {
  fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfd81', {
    headers: { Authorization: 'bearer EG4f6juh1PF0X82amiv_' },
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data['docs'][0].name)
      console.log("Race: " + data['docs'][0].race)
      console.log("Gender: " + data['docs'][0].gender)
      console.log("Hair: " + data['docs'][0].hair)
      console.log("Died: " + data['docs'][0].death)
    })
})
// Gandolf side button
let gandolfBtn = document.getElementById("gandolf-button")
gandolfBtn.addEventListener('click', function () {
  fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0', {
    headers: { Authorization: 'bearer EG4f6juh1PF0X82amiv_' },
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data['docs'][0].name)
      console.log("Race: " + data['docs'][0].race)
      console.log("Gender: " + data['docs'][0].gender)
      console.log("Hair: " + data['docs'][0].hair)
      console.log("Born: " + data['docs'][0].birth)
      console.log("Died: " + data['docs'][0].death)
    })
})
// Gollum side button
let gollumBtn = document.getElementById("gollum-button")
gollumBtn.addEventListener('click', function () {
  fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfe9e', {
    headers: { Authorization: 'bearer EG4f6juh1PF0X82amiv_' },
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data['docs'][0].name)
      console.log("Race: " + data['docs'][0].race)
      console.log("Gender: " + data['docs'][0].gender)
      console.log("Died: " + data['docs'][0].death)
    })
})