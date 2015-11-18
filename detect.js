'use strict';

var checkForAdBlocker = (function() {
	function _detect() {
		var elementHeight = document.getElementById('adsense').clientHeight;

		if (elementHeight === 0) {
			// do stuff when AdBlocker is active
			document.querySelector('.fjs-adblock-status').innerHTML = 'ACTIVE';
			document.getElementsByTagName('body')[0].className += ' active';
		} else {
			// do stuff when AdBlocker is NOT active
			document.querySelector('.fjs-adblock-status').innerHTML = 'NOT ACTIVE';
			document.getElementsByTagName('body')[0].className += ' not-active';
		}
	}

	return {
		'detect': _detect
	};
}());

window.setTimeout(checkForAdBlocker.detect, 100);
