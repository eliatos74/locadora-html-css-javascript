// ENTRAR NO SISTEMA
document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Entrar no sistema");
    window.location.href = "./html/dashboard.html";
});

document.getElementById("recover_password").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("ENTROU EM RECUPERAR SENHA");
    window.location.href = "./html/rec_pass.html"
})