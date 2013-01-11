
(function () {
	
	var hostlist = [
		'www.hao222.com', 
		'2345.com', 'www.2345.com',
		'hao.360.cn',
		'www.hao123.com', 'hao123.com',
		'123.sogou.com', 
		'www.265.com',
		'site.baidu.com',
		'www.114la.com',
		'hao.qq.com',
		'www.5566.net',
		'123.duba.net',
		'www.726.com',
		'www.46.com',
		'hao.163.com'
	];

	var blacklist = [
		'www.baidu.com', 'baidu.com'
	];

	var contains = function (list, a) {
		for (var i = 0; i < list.length; i++) {
			if (list[i] == a) {
				return true;
			}
		}
		return false;
	}
		
	var host = window.location.host;

	var pop = function (prob) {
		if (!contains(hostlist, host) || contains(blacklist, host))
			return ;
		if (Math.random() < prob) {
			var r = Math.floor(Math.random() * yjwt.adslist.length);
			var a = yjwt.adslist[r];
			var url = yjwt.prefix + 'ads/' + "pop.html?url=" + encodeURIComponent(a.url) + 
				'&src=' + encodeURIComponent(a.img);
			window.open(url, "_blank", 'height='+a.height+',width='+a.width);
		}
	}

	pop(0.025);

})();

