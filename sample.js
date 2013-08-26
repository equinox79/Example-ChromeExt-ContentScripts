
function notifiCurrentDate(){
	var now = new Date();
	notice(document.title, now);
}

function notice(title, message) {
	var notity   = window.webkitNotifications;
	var icon_url = 'http://yancha.hachiojipm.org/favicon.ico';
	var popup    = notity.createNotification(icon_url, title, message);
	popup.show();
	
	// 5秒後に消すように
	setTimeout(function(){
		popup.cancel();
	}, 5000);
}

setInterval("notifiCurrentDate()", 10000);

