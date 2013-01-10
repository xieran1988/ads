
function yjwt_randpop(prob) {
	try {
		if (Math.random() < prob) {
			var r = Math.floor(Math.random()*adslist.length);
			var a = adslist[r];
			var url = yjwt_prefix + "pop.html?url=" + encodeURIComponent(a.url) + 
							'&src=' + encodeURIComponent(a.img);
			window.open(url, "_blank", 'height='+a.height+',width='+a.width);
		}
	}	catch (e) { }
}

