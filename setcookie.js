
function setCookie(name, value) 
{ 
	var argv = setCookie.arguments; 
	var argc = setCookie.arguments.length; 
	var expires = (argc > 2) ? argv[2] : null; 
	if(expires!=null) 
	{ 
		var LargeExpDate = new Date (); 
		LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));         
	} 
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString())); 
}

//setCookie('pushalert', '1', 1);

