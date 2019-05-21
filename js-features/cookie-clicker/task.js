
const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = function() {
	clickerCounter.innerText++;
	if (clickerCounter.innerText % 2 === 0){
		cookie.width = 200;
	} else {
		cookie.width = 300;
	}

}