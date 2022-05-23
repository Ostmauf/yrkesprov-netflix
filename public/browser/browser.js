const defaultProfileButton = document.getElementById("default-profile-button");
const defaultProfileImg = document.getElementById("default-profile-img");

defaultProfileButton.addEventListener("click", homeRedirect)
defaultProfileImg.addEventListener("click", homeRedirect)

function homeRedirect() {
    window.location.href = "/home"
}