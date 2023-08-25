var inputField = document.getElementById("username");
var username = "";

inputField.addEventListener("input", function () {
    username = inputField.value;
});

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

function handleDivClick(event) {
    // Remove the "selected" class from the last selected div (if any)
    if (lastSelectedDiv !== null) {
        lastSelectedDiv.classList.remove("selected");
    }

    // Add the "selected" class to the clicked div
    event.target.classList.add("selected");

    // Update the last selected div
    lastSelectedDiv = event.target;

    // Perform your action based on which div was clicked
    if (event.target.id === "div1") {
        // Code to perform for Div 1
        console.log("Div 1 was clicked");
    } else if (event.target.id === "div2") {
        // Code to perform for Div 2
        console.log("Div 2 was clicked");
    } else if (event.target.id === "div3") {
        // Code to perform for Div 3
        console.log("Div 3 was clicked");
    }
}

document.getElementById("div1").addEventListener("click", handleDivClick);
document.getElementById("div2").addEventListener("click", handleDivClick);
document.getElementById("div3").addEventListener("click", handleDivClick);