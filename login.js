const loginBtn = document.getElementById("login-btn").addEventListener("click", function(){
    const usernameInput = document.getElementById("Username-input").value
    const passwordInput = document.getElementById("password-input").value
    if(usernameInput === "admin"){
        if(passwordInput === "admin123"){
           window.location.href = "home.html"
       }
    }
    else{
        return;
    }
})