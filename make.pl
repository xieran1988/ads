#!/usr/bin/perl
#
#

open F, "find . -type d |";
open J, ">list.js";

print J "yjwt.adslist = [\n";

while (<F>) {
	chomp;
	s,^./,,;
	next if (! -e "$_/url.txt");
	print "process $_\n";
	$url = `cat $_/url.txt`;
	chomp $url;
	@files = split /\n/, `ls $_/[0-9]*`;
	for $f (@files) {
		$f =~ /(\d+)[xX](\d+).(\w+)/;
		$w = $1;
		$h = $2;
		$ext = $3;
		print " $f = $w $h $ext\n";
		$type = $ext eq 'swf' ? 'swf' : 'img';
		print J "{'url':'$url', '$type':'$f', 'height':'$h', 'width':'$w'},\n" if $type eq 'img';
	}
}

print J "];\n";

close F;
close J;

