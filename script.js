function submitForm() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('"email').value;
    let reason = document.getElementById('reason').value;
    if (fname != null && lname != null && email != null && reason != null) {
        alert("Form submited successfully!")
    } else {
        alert("All fields required.")
    }

}