
// Récupération des tags HTML
let form = document.querySelector(".component__signIn__form")
let zoneEmail = document.querySelector(".component__signIn__form__input")
let errorMessage = document.querySelector(".component__signIn__form span")
let popupConfirmation = document.querySelector(".popupConfirmation")
let component = document.querySelector(".component")
let btnDismiss = document.querySelector(".popupConfirmation__button")
let emailDisplay = document.querySelector(".popupConfirmation__content strong")

// Si l'utilisateur modifie le texte entré dans le champ d'email
zoneEmail.addEventListener("change", () => {

    // Vérifier la valeur entrée
    let emailUser = zoneEmail.value
    verifyEmail(emailUser)
})

// Si l'utilisateur soumet le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Vérifier la valeur entrée
    let emailUser = zoneEmail.value
    if (verifyEmail(emailUser)) {

        // Si la valeur est validé afficher le popup et vidé le champ d'email
        displayPopup()
        emailDisplay.textContent += `${emailUser}`
        zoneEmail.value = ""
    }
})

// Si le bouton Dismiss du popup est cliqué revenir à l'affichage principal
btnDismiss.addEventListener("click", () => {
    returnToComponent()
    emailDisplay.textContent = ""
})




// Affiche les messages d'erreurs
function displayMessageError() {
    if (zoneEmail.className !== "active") {
        zoneEmail.classList.add("active")
    }
    if (errorMessage.className === "none") {
        errorMessage.classList.remove("none")
    }
}

// Supprime les messages d'erreur
function removeMessageError() {
    if (zoneEmail.className === "component__signIn__form__input active") {
        zoneEmail.classList.remove("active")
    }
    if (errorMessage.className !== "none") {
        errorMessage.classList.add("none")
    }
}

// Affiche le popup
function displayPopup() {
    popupConfirmation.classList.remove("none")
    component.classList.add("none")
}

// Retour vers l'affichage principal
function returnToComponent() {
    popupConfirmation.classList.add("none")
    component.classList.remove("none")
}

// Vérificateur du mail entré par l'utilisateur
function verifyEmail(emailUser) {
    let regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z]+\\.[a-zA-Z]+$")
    let testAnswer = regex.test(emailUser)

    if (testAnswer) {
        removeMessageError()
        return true
    } else {
        displayMessageError()
    }
}