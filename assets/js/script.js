console.log("script chargé");
// Plus de chargement de la page quand un utilisateur écrit un commentaire
const elementForm = document.querySelector("form");
console.log("la constante elementForm contient :", elementForm);
elementForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("le formulaire est soumis");
    // Vérifier que tous les champs ne sont pas vides, si l'un est vide : afficher le message 
    // d'erreur déjà présent dans le HTML (caché par défaut)
    const inputFirstname = document.querySelector("#first-name").value.trim();
    console.log("la constante inputFirstname contient : ", inputFirstname);
    const inputLastname = document.querySelector ("#last-name").value.trim();
    console.log("la constante inputLastname contient : ", inputLastname);
    const message = document.querySelector ("#message").value.trim();
    console.log("la constante message contient : ", message);

    if (inputFirstname == "" || inputLastname == "" || message == "") {
        // Un des champs est vide
        document.querySelector ("#error-message").style.display = "block";
    } else {
        // Tous les champs sont remplis
        document.querySelector("#error-message").style.display = "none";
        // Ajouter le contenu de ce formulaire dans un nouveau commentaire au sein de la liste 
        // déjà présente (en reprenant les balises HTML d’un des commentaires).
        const blockToClone = document.querySelector("#bloc-to-clone");
        console.log("la constante blocktoClone contient : ", blockToClone);
        const clonedElement = blockToClone.cloneNode(true);
        console.log("la constante clonedElement contient : ", clonedElement);
        clonedElement.querySelector("h3").textContent = inputFirstname + " " + inputLastname;
        clonedElement.querySelector("p").textContent = message;
        document.querySelector("#comment-list").appendChild(clonedElement)
        console.log("la constante clonedElement contient maintenant : ",clonedElement);
        // Supprimer le contenu des champs du formulaire une fois le nouveau commentaire affiché dans la liste
         elementForm.reset();
    }
});
