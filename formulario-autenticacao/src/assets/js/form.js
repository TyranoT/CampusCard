const form_cadastro = document.getElementById("form-cadastro");
const form_login = document.getElementById("form-login");
const form_login_transition = document.getElementById("form-login-transition");
const form_cadastro_transition = document.getElementById("form-cadastro-transition");

form_cadastro.style.display = "none";
form_login_transition.onclick = function() {
    form_login.style.display = "none";
    form_cadastro.style.display = "flex";
}
form_cadastro_transition.onclick = function() {
    form_cadastro.style.display = "none";
    form_login.style.display = "flex";
}
