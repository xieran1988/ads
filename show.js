
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
		}
	}
}

function yjwt_pop_show() {
	var url = getQueryVariable('url');
	var src = getQueryVariable('src');
	var html = '<a href="{href}"><img src="{src}" ></img></a>';
	html = html.replace('{href}', url);
	html = html.replace('{src}', src);
	document.write(html);
}
yjwt_pop_show();

