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