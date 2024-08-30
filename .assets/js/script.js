// Plus de rechargement de la page quand un utilisateur écrit un commenataire
const elementForm = document.querySelector("form");
console.log("la constante elementForm contient", elementForm);
elementForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("le formulaire est soumis");
});