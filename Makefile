
all:
	./make.pl
	cat yjwt.js list.js sub.js pop.js > gen125.js
	cp gen125.js ../3e3c58f.js

depoly125-img:
	scp -r game taobao sql:/var/www/html/ads 

depoly125:
	scp gen125.js sql:/var/www/html/f5c5261.js

