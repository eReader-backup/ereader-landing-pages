var inputField = document.getElementById("username");
var username = "";

// inputField.addEventListener("input", function () {
//     username = inputField.value;
// });

function flipbookClick() {
    let name = username.trim();
    if (name !== "" && name !== undefined) {
        let url = "https://wayside-reader1.comprodls.com/demo/student-edition/interkulturel_1_vtext?username=" + name;
        window.open(url, "_blank");
    } else {
        username = "";
        alert("Enter your name to launch the Reader.")
    }
}

function webbookClick() {
    let name = username.trim();
    if (name !== "" && name !== undefined) {
        let url = "https://wayside-reader2.comprodls.com/demo/student-edition/interkulturel_1_vtext?username=" + name;
        window.open(url, "_blank");
    } else {
        username = "";
        alert("Enter your name to launch the Reader.")
    }
}

let lastSelectedDiv = document.getElementById("div1");
let lastSelectedButton = document.getElementById("div1").querySelector("button");

function handleDivClick(event) {
    debugger
    if (lastSelectedDiv !== null) {
        lastSelectedDiv.classList.remove("selectedDiv");
    }
    event.currentTarget.classList.add("selectedDiv");
    lastSelectedDiv = event.currentTarget;

    // Get the button element within the div
    const button = event.currentTarget.querySelector("button");

    // Apply different styles to the button in the selected div
    if (button) {
        if (lastSelectedButton !== null) {
            lastSelectedButton.classList.remove("launchSelectedButton");
        }
        button.classList.add("launchSelectedButton");
        lastSelectedButton = button;
    }
}

document.getElementById("div1").addEventListener("click", handleDivClick);
document.getElementById("div2").addEventListener("click", handleDivClick);
document.getElementById("div3").addEventListener("click", handleDivClick);