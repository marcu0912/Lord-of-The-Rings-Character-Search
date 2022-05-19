let person1 = document.getElementById("person1")
let person2 = document.getElementById("person2")
let person3 = document.getElementById("person3")
// ----------- 
var queryString = document.location.search
var results = queryString.split("?")[1]
var data = results.split("&")
let arrCharacterType = [] 
let oldQuotes = document.getElementById("oldQuotes")
let storedQuotes1 = localStorage.getItem("quotes")
console.log(storedQuotes1)
oldQuotes.innerHTML = storedQuotes1;

  // // Function to activate the 
  // document.getElementById("ring-title").addEventListener("click", elvishFont);
  // function elvishFont() {
  //   var selection = document.getElementById("body");
  //   if (selection.style.fontFamily == "Tangerine") {
  //     selection.style.fontFamily = "elvish_ring_nfiregular";
  //   } else {
  //     selection.style.fontFamily = "Tangerine";
  //   }
  // }

for (let i = 0; i < data.length; i++) {
	var d = data[i].split("=")
  arrCharacterType.push(d[1])
}
function randomIndex(data) {
  	return Math.floor(Math.random() * data.length);
}
fetch("https://the-one-api.dev/v2/character", {
    headers: { Authorization: "bearer EG4f6juh1PF0X82amiv_" },
  })
    .then((response) => response.json())
    .then((data) => {
    let arrCharacter = []
    for (let i = 0; i < data["docs"].length; i++) {
    console.log(data["docs"][i].race.toLowerCase())
    let raceCheck = arrCharacterType.includes(data["docs"][i].race.toLowerCase());
    let genderCheck = data["docs"][i].gender == "Male" || data["docs"][i].gender == "Female";
      if (raceCheck && genderCheck) {
      	    console.log(data["docs"][i])
            arrCharacter.push(data["docs"][i])
      }
    }
    console.log(arrCharacterType)
    console.log(arrCharacter)
    let randomIndex1 = randomIndex(arrCharacter)
    let randomIndex2 = randomIndex(arrCharacter)
    let randomIndex3 = randomIndex(arrCharacter)
     console.log(randomIndex1)
     console.log(randomIndex2)
     console.log(randomIndex3)
     console.log(arrCharacter[randomIndex1])
     console.log(arrCharacter[randomIndex2])
     console.log(arrCharacter[randomIndex3])
     let person1Link = arrCharacter[randomIndex1].wikiUrl;
     let person1Name = arrCharacter[randomIndex1].name;
     person1.href = person1Link;
     person1.textContent = person1Name;
     let person2Link = arrCharacter[randomIndex2].wikiUrl;
     let person2Name = arrCharacter[randomIndex2].name;
     person2.href = person2Link;
     person2.textContent = person2Name;
     let person3Link = arrCharacter[randomIndex3].wikiUrl;
     let person3Name = arrCharacter[randomIndex3].name;
     person3.href = person3Link;
     person3.textContent = person3Name;
  });