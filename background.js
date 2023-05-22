console.log("background.js loaded");

chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage(() => console.log('options page opened'));
});


chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.action === "openTab") {
        const tab = { active: true, url: "https://www.airbnb.com/" };
        const newTab = await chrome.tabs.create(tab);
    }
    else if (request.action === "getHtml") {
        chrome.downloads.download({
            url: request.blobURL,
            filename: "airbnb.html"
        });
    }
    return true;
});
