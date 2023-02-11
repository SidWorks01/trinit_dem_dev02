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

function updateDatabase() {
	// const db = openDatabase("myDatabase", "1.0", "My Database", 2 * 1024 * 1024);

	// db.transaction(function (tx) {
	// 	tx.executeSql('CREATE TABLE IF NOT EXISTS WebsiteTraffic (id INTEGER PRIMARY KEY, website TEXT, start TIME, end TIME)');
	// });

	// db.transaction(function(tx) {
	// 	console.log("check");
	// 	tx.executeSql("INSERT INTO WebsiteTraffic (url, traffic) VALUES (?, ?)", ["www.example.com", 500]);
	// 	tx.executeSql("drop table WebsiteTraffic;");
	// });
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


function carbonfootprint(){
	var downloaded = downloadedData();
	var uploaded = uploadedData();
	var total = (downloaded+uploaded)*11/(1024*1024);
	console.log("Total Footprints left : "+total);
	var roundoff = roundTo(total, 5)
	document.getElementById("Session_footprint").innerText = "Session's Footprint = " + String(roundoff) + "gm";
	console.log("fetched");
	
}


carbonfootprint();

updateDatabase();