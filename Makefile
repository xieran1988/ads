
all:
	cat var125.js list.js pop.js dopop125.js > gen125.js
	cat r125.js gen125.js > gen125r.js

depoly125-img:
	scp -r game taobao sql:/var/www/html/ads 

depoly125:
	scp gen125r.js sql:/var/www/html/r.js

