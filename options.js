console.log("Opened options page...");

document.addEventListener("DOMContentLoaded", function () {
    let loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", function (event) {

        console.log("Clicked login button...");
        chrome.runtime.sendMessage({ action: "openTab", url: "https://www.airbnb.com/" });

    });
});
