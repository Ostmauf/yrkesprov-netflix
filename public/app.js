const emailInputFieldElement = document.getElementById("email-input-field");
const emailSubmitBtn = document.getElementById("email-submit-button");

emailSubmitBtn.addEventListener("click", async () => {
    const userInput = {
        gmail: emailInputFieldElement.value
    }
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInput)
    }
    fetch("/email", options);

});