var inputField = document.getElementById("username");
var username = "";

inputField.addEventListener("input", function () {
    username = inputField.value;
});

var radioButtons = document.getElementsByName('reader');
var selectedValue;
var readerText = document.getElementById('readerText');
var fixedReaderText = "Experience the future of Digital Reading and say goodbye to dull and lifeless documents, as our reader brings the content to life, makes it more engaging and informative.";
var reflowableReader = "Exhausted with conventional textbooks and static PDFs? Embark on a journey with our innovative reader where information becomes a vibrant, interactive experience.";
readerText.textContent = fixedReaderText;

radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('click', function () {
        selectedValue = radioButton.value;
        console.log("Selected Value: " + selectedValue);
        if (selectedValue === 'fixedReader') {
            readerText.textContent = fixedReaderText;
        } else if (selectedValue === 'reflowableReader') {
            readerText.textContent = reflowableReader;
        }
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