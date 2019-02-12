window.onload = function() {

	burger.onclick = function() {
		var ul = document.querySelector('.menu ul');
		if (ul.style.visibility == 'hidden') {
			ul.style.visibility = 'visible';
		} else {
			ul.style.visibility = 'hidden';
		}
	}

};