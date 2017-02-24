"use strict";
class check{
	 constructor(){
	 this.name = "Tom";
	 this.test = "ich war ein Let";
}
	eingabe( id ){
		var text = document.getElementById("eins").value;
		if(text != ""){
			document.getElementById("text").innerHTML = text;
		}else{
			document.getElementById("text").innerHTML = "Fehler bei der eingabe.";
		}
	}
}
