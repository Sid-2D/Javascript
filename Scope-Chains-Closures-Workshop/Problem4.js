function foo() {
	var bar;
	quux = "hello";
	function zip() {
		var quux = "world";
		bar = true;
	}
	return zip;
}