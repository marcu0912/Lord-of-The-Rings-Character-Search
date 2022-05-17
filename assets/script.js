<<<<<<< HEAD
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
=======
// needs a function button that leads to the wiki page
// random quote generator

function quote() {
  console.log("Test if button is working");
>>>>>>> 7b00c61f1e75f7ea8315adb2480829662820b4a8
}
