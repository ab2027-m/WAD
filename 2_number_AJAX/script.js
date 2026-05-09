document.getElementById("registerForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    // Get old users or empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push data into array
    users.push(user);

    // Save to local storage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Method
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        alert("Registration Successful!");
        window.location.href = "users.html";
    };

    xhr.send(JSON.stringify(user));
});