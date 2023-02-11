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

function carbonfootprint(){
	var downloaded = downloadedData();
	var uploaded = uploadedData();
	var total = (downloaded+uploaded)*11/(1024*1024);
	console.log("Total Footprints left : "+total);

}


carbonfootprint();

updateDatabase();