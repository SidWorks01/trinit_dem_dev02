chrome.devtools.panels.create("My panel", "images/icon-16.png", "panel.html", function(panel) {
	chrome.devtools.network.onRequestFinished.addListener(
		function(request) {
			var body = document.getElementById("test");
			body.innerHTML = request.request.getHAR();
			console.log(request.request.getHAR())
		}
	)
});
