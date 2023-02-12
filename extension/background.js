console.log("Started the Extension");
function downloadedData() {
  var resources = performance.getEntriesByType("resource");

  var totalDownloaded = 0;
  for (var i = 0; i < resources.length; i++) {
    totalDownloaded += resources[i].transferSize;
  }
  console.log(String(totalDownloaded));
  return totalDownloaded;
}

function uploadedData() {
  var resources = performance.getEntriesByType("resource");

  var totalUploaded = 0;
  for (var i = 0; i < resources.length; i++) {
    totalUploaded += resources[i].encodedBodySize;
  }
  console.log(String(totalUploaded));
  return totalUploaded;
}

//Funtion for rounding off digits
function roundTo(n, digits) {
  var negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    n = (n * -1).toFixed(digits);
  }
  return n;
}

let session = null;

function carbonfootprint() {
  var downloaded = downloadedData();
  var uploaded = uploadedData();
  var total = ((downloaded + uploaded) * 11) / (1024 * 1024);
  console.log("Total Footprints left : " + total);
  var roundoff = roundTo(total, 8);
  session = roundoff;
  window.localStorage.setItem("sessionfootprint", Number(roundoff));
  document.getElementById("Session_footprint").innerText =
    "Session's Footprint = " + String(roundoff) + "gm";
  console.log("Updated Session");
}

let overallfp = window.localStorage.getItem("overallfootprint");

function overall() {
  let rn = session + overallfp;
  document.getElementById("Overall_footprint").innerText =
    "All Time Footprint = " + String(rn) + "gm";
  console.log("Updated Overall");
}

carbonfootprint();
overall();
window.localStorage.setItem("overallfootprint", 1);
//when browser closes
window.onbeforeunload = function (event) {
  window.localStorage.setItem("overallfootprint", 1);
  let fp = window.localStorage.getItem("overallfootprint");
  window.localStorage.getItem("overallfootprint");
  fp = Number(fp) + Number(session);
  window.localStorage.setItem("overallfootprint", fp);

  let ss = window.localStorage.getItem("overallfootprint");
  console.log("logged " + ss);
};

carbonfootprint();

chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("//")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log("works");
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});

setInterval(function () {
  carbonfootprint();
  overall();
}, 1000);
