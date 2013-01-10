
all:
	cat yjwt.js list.js sub.js pop.js > gen125.js

depoly125-img:
	scp -r game taobao sql:/var/www/html/ads 

depoly125:
	scp gen125.js sql:/var/www/html/r.js

