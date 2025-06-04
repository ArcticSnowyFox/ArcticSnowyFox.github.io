function sendFunction() {
    let title = document.getElementById("input-title").value;
    let text = document.getElementById("input-big-text").value;

    if (title == "") {
        alert("Title needed")
    }
    else if (text == "") {
        alert("feedback needed")
    }
    else {
        document.getElementById("feedback-btn").innerHTML = "Feedback Sent!";
        document.getElementById("input-title").value = "";
        document.getElementById("input-big-text").value = "";
        document.getElementById("input-name").value = "";
        document.getElementById("input-email").value = "";
    }
}
