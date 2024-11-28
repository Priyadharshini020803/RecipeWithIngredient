const validUsername = "priya";
const validPassword = "priya";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

   
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === validUsername && password === validPassword) {
        
        alert("Login successful!");
        
        window.location.href = "home.html"; // Redirect to Home page
    } else {
        
        document.getElementById("errorMessage").style.display = "block";
    }
});