window.onload=function(){
	var btn=document.getElementsByTagName('img')[4];
	var shot=document.getElementById("shot");
	//console.log(btn);
	//console.log(btn.src);
	getgift=function (){
		btn.src="images/1930-1080_03.png";
		// console.log(btn.src);
		shot.className="rest";
	}
}