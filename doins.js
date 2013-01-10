
function yjwt_do_ins(type, url, src) {
	// TODO: http://www.hao222.com/

	var host = window.location.host;

	if (host == 'www.hao222.com') {
		var code = yjwt_ins_getcode(type, url, src, 220, 200);
		$('#aside').prepend(code);				
	}
	if (host == '2345.com' || host == 'www.2345.com') {
		var code = yjwt_ins_getcode(type, url, src, 256, 200);
		var e = document.getElementById("right");
		if (e && !e.innerHTML.match('yjwt-ads')) {
			e.innerHTML = code + e.innerHTML;
		}
	}
	if (host == 'hao.360.cn') {
		var code = yjwt_ins_getcode(type, url, src, 228, 200);
		$(code).insertBefore($('.side-kuzhan-content'));
	}
	if (host == 'www.hao123.com' || host == 'hao123.com') {
		var code = yjwt_ins_getcode(type, url, src, 240, 200);
		$(code).insertBefore($('.lcs-info'));
	}
	if (host == '123.sogou.com') {
		var code = yjwt_ins_getcode(type, url, src, 230, 220);
		$(code).insertBefore($('#toolkitall'));
	}
	if (host == 'www.265.com') {
		var code = yjwt_ins_getcode(type, url, src, 186, 130);
		$(code).insertBefore($('#tools'));
	}
	if (host == 'site.baidu.com') {
		code = embed.replace(/{width}/g, '192px');
		code = code.replace(/{height}/g, '130px');
		$(code).insertBefore($('#leftwraper'));
	}
	if (host == 'www.114la.com') {
		code = embed.replace(/{width}/g, '218px');
		code = code.replace(/{height}/g, '200px');
		$(code).insertBefore($('.col-starBar'));
	}
	if (host == 'hao.qq.com') {
		code = embed.replace(/{width}/g, '209px');
		code = code.replace(/{height}/g, '200px');
		$(code).insertBefore($('.barBox'));
	}
	if (host == 'www.5566.net') {
		code = embed.replace(/{width}/g, '209px');
		code = code.replace(/{height}/g, '200px');
		$(code).insertBefore($('#div1'));
	}
	if (host == '123.duba.net') {
		code = embed.replace(/{width}/g, '232px');
		code = code.replace(/{height}/g, '200px');
		$(code).insertBefore($('.side_a'));
	}
	if (host == 'www.726.com') {
		code = embed.replace(/{width}/g, '228px');
		code = code.replace(/{height}/g, '200px');
		$('.bn_L').prepend(code);
	}
	if (host == 'www.46.com') {
		code = embed.replace(/{width}/g, '218px');
		code = code.replace(/{height}/g, '200px');
		$('#tool').prepend(code);
	}
	if (host == 'hao.163.com') {
		code = embed.replace(/{width}/g, '228px');
		code = code.replace(/{height}/g, '200px');
		$('.oneborder').prepend(code);		
	}
}

function yjwt_timer() {
	var w = $('#yjwt-ads');
	if (w == null || w.length == 0) {
		yjwt_ins('swf', 
					'http://tg.17quwan.com/r/dianxin3172/index.html?kwd=01',
					'http://125.39.155.32/320x270.swf'
					);
		setTimeout(yjwt_timer, 1000);
	}
}
setTimeout(yjwt_timer, 1000);

