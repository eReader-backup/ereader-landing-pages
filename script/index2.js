var inputField = document.getElementById("username");
var username = "";

inputField.addEventListener("input", function () {
    username = inputField.value;
});

var radioButtons = document.getElementsByName('reader');
var selectedValue;

radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('click', function () {
        selectedValue = radioButton.value;
        console.log("Selected Value: " + selectedValue);
    });
});

function flipbookClick(name) {
    let url = "https://wayside-reader1.comprodls.com/demo/student-edition/interkulturel_1_vtext?username=" + name;
    window.open(url, "_blank");
}

function webbookClick(name) {
    let url = "https://wayside-reader2.comprodls.com/demo/student-edition/interkulturel_1_vtext?username=" + name;
    window.open(url, "_blank");
}

function launch() {
    debugger
    let name = username.trim();
    if (name !== "" && name !== undefined) {
        if (selectedValue === "fixedReader") {
            flipbookClick(name);
        } else if (selectedValue === "reflowableReader") {
            webbookClick(name);
        } else {
            alert("Choose your reader style to launch the Reader.")
        }
    } else {
        username = "";
        alert("Enter your name to launch the Reader.")
    }
}