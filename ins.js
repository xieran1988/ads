
Function.prototype.getMultiLine = function() {  
    var lines = new String(this);  
    lines = lines.substring(lines.indexOf("/*<") + 3, lines.lastIndexOf(">*/"));  
    return lines;  
}

function yjwt_ins_getcode(type, url, src, width, height) {
	/*<
	<div id='yjwt-ads'
		style="position:relative;text-align:left;
		width:{width};height:{height};font-family:宋体;">
	<embed style="position:absolute;z-index:0" 
   		src="{src}" quality="high" 
   		width="{width}" height="{height}" type="application/x-shockwave-flash" 
   		pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" wmode="opaque">
	<a href="{href}" target="_blank" 
		style="cursor:pointer;z-index:1; 
		position:absolute;display:block;background:white;
		filter:alpha(opacity=0);opacity:0;width:{width};height:{height};" 
		onfocus="this.blur();"></a>
	</div>
	>*/

	var embed;
	if (type == 'swf') {
		embed = yjwt_ins_getcode.getMultiLine();
	} else {
		embed = '<a id="yjwt-ads" href="{href}"><img src="{src}" width="{width}" height="{height}"></img</a>';
	}

	embed = embed.replace(/{href}/g, url);
	embed = embed.replace(/{src}/g, src);
	code = embed.replace(/{width}/g, width + 'px');
	code = code.replace(/{height}/g, height + 'px');
}

