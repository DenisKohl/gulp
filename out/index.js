"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var check = function () {
	function check() {
		_classCallCheck(this, check);

		this.name = "Tom";
		this.test = "ich war ein Let";
	}

	_createClass(check, [{
		key: "eingabe",
		value: function eingabe(id) {
			var text = document.getElementById("eins").value;
			if (text != "") {
				document.getElementById("text").innerHTML = text;
			} else {
				document.getElementById("text").innerHTML = "Fehler bei der eingabe.";
			}
		}
	}]);

	return check;
}();