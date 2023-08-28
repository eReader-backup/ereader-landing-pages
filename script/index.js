var inputField = document.getElementById("username");
var username = "";

function flipbookClick() {
  let url =
    "https://wayside-reader1.comprodls.com/demo/student-edition/interkulturel_1_vtext";
  window.open(url, "_blank");
}

function webbookClick() {
  let url =
    "https://wayside-reader2.comprodls.com/demo/student-edition/interkulturel_1_vtext";
  window.open(url, "_blank");
}

function flipbookClickTE() {
  let url =
    "https://wayside-reader1.comprodls.com/demo/teacher-edition/interkulturel_1_te";
  window.open(url, "_blank");
}

let lastSelectedDiv = document.getElementById("div1");
let lastSelectedButtons = [
  document.getElementById("div1").querySelector("button"),
];

function handleDivClick(event) {
  if (event.target.tagName != "BUTTON" && lastSelectedDiv.id != event.currentTarget.id) {
    if (lastSelectedDiv !== null) {
      lastSelectedDiv.classList.remove("selectedDiv");
    }
    event.currentTarget.classList.add("selectedDiv");
    lastSelectedDiv = event.currentTarget;

    const buttons = event.currentTarget.querySelectorAll("button");
    buttons.forEach((button) => {
      lastSelectedButtons.forEach((selectedbutton) => {
        selectedbutton.classList.remove("launchSelectedButton");
      });
      button.classList.add("launchSelectedButton");
    });
    lastSelectedButtons = buttons;
  }
}

document.getElementById("div1").addEventListener("click", handleDivClick);
document.getElementById("div2").addEventListener("click", handleDivClick);
