// radomize movie quote when clicked

function quote() {
  const APIKey = "bearer EG4f6juh1PF0X82amiv_";
  fetch("https://the-one-api.dev/v2/quote", {
    headers: { Authorization: "bearer EG4f6juh1PF0X82amiv_" },
  })
    .then((response) => response.json())
    .then((data) => {
      for (var index = 0; index < data["docs"].length; index++) {
        console.log(data["docs"][index]["dialog"]);
      }
    });
}











//This is the functin that allows the hidden button inbeded into the header image of a ring to toggle fonts//

document.getElementById("ring-title").addEventListener("click", elvishFont);
function elvishFont() {
  var selection = document.getElementById("body");
  if (selection.style.fontFamily == 'Tangerine') {
    selection.style.fontFamily = "elvish_ring_nfiregular";
  }else{
    selection.style.fontFamily = "Tangerine";
  }
}