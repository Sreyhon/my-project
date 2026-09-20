function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    document.querySelector("form").reset();
}