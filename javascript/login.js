// ENTRAR NO SISTEMA
document.getElementById("loginBtn").addEventListener("click", function () {
    console.log("Entrar no sistema");
    window.location.href = "../html/dashboard.html";
});

document.getElementById("recover_password").addEventListener("click", function () {
    window.location.href = "../html/rec_pass.html"
})