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


    // 3 side character buttons
    legolasEl.addEventListener("dblclick", function() {
fetch("https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfd81", {
    headers: { Authorization: "bearer EG4f6juh1PF0X82amiv_" },
  })
     .then((response) => response.json())
     .then((data) => {
        console.log(data["docs"]["race"]);
})
    
    //Legolas id: 5cd99d4bde30eff6ebccfd81