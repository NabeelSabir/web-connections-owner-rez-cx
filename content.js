
console.log("content.js loaded");

$(document).ready(function () {
    console.log("content.js: Document ready.");
    let html = document.documentElement.outerHTML;
    let blob = new Blob([html], {type: "text/html"});
    const url = window.URL.createObjectURL(blob);
    chrome.runtime.sendMessage({ action: "getHtml", html: html , blobURL: url });
});

