
document.getElementById("phoneBtn").addEventListener("click", function() {
    copyToClipboard(config.phoneNumber);
});

document.getElementById("schoolemailBtn").addEventListener("click", function() {
    copyToClipboard(config.schoolEmail);
});

document.getElementById("emailBtn").addEventListener("click", function() {
    copyToClipboard(config.personalEmail);
});

document.getElementById("addressBtn").addEventListener("click", function() {
    copyToClipboard(config.address);
});

document.getElementById("postalCodeBtn").addEventListener("click", function() {
    copyToClipboard(config.postalCode);
});

document.getElementById("linkedinBtn").addEventListener("click", function() {
    copyToClipboard(config.linkedin);
});

document.getElementById("githubBtn").addEventListener("click", function() {
    copyToClipboard(config.github);
});


document.getElementById("websiteBtn").addEventListener("click", function() {
    copyToClipboard(config.website);
});

document.getElementById("schoolnameBtn").addEventListener("click", function() {
    copyToClipboard(config.schoolName);
});


function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert("Copied to clipboard:  " + text);
        console.log("Text copied to clipboard: ", text);
    }).catch(function(error) {
        console.error("Error copying text: ", error);
    });
}
