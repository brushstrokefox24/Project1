var checkfor = false;

function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text"); //data is id of planet
	var f=document.getElementById(data); // f is object of the planet
	ev.target.appendChild(f);
	
	var what=ev.target.id;

	
	
	//Starving Student Plan
	if(what==="membership1" && data==="$5" ){
		window.checkfor=true;
		document.getElementById("buyout").innerHTML="Congratulations! You have just signed up for three months of membership in the Starving Student Group. Your first month's fee will $14.00 and the remaining five months will cost $19.00."; 
	}else if(what=="membership1" && data=="$10" ){
		window.checkfor=true;
		document.getElementById("buyout").innerHTML="Congratulations! You have just signed up for six months of membership in the Starving Student Group. Your first month's fee will $9.00 and the remaining five months will cost $19.00.";
		
	}else if(what=="membership1" && data=="$20" ){
		window.checkfor=true;
		document.getElementById("buyout").innerHTML="Congratulations! You have just signed up for a year of membership in the Starving Student Group. Your first month's fee will be free and the remaining five months will cost $19.00.";
		 
	}
	//Professional Plans
	else if(what==="membership2" && data==="$5" ){
		window.checkfor=true;
		document.getElementById("buyout").innerHTML="Congratulations! You have just signed up for three months of membership in the Professional Bite-me Group. Your first month's fee will $34.00 and the remaining five months will cost $39.00.";
	 
	}else if(what=="membership2" && data=="$10" ){
		window.checkfor=true;
		document.getElementById("buyout").innerHTML="Congratulations! You have just signed up for six months of membership in the Professional Bite-Me Group. Your first month's fee will $29.00 and the remaining five months will cost $39.00.";
		
	}else if(what=="membership2" && data=="$20"){
		window.checkfor=true;
		document.getElementById("buyout").innerHTML="Congratulations! You have just signed up for a year of membership in the Professional Bite-me Group. Your first month's fee will be $19.00 and the remaining five months will cost $39.00.";
	
	}
	//Attorney Plan
	else if(what=='membership3'){
		window.checkfor=true;
		alert("An Attorney Group Plan is free for verified Attorneys of Law!");
		document.getElementById("buyout").innerHTML="Congratulations! You have just signed up for a year of membership in the Access to Attorney Group. Your membership is free pending verification.";
	}
	
	//Last Option
	else{
		
	}
	

}
function clearpage(ev){
	if(window.checkfor==true){
	document.getElementById("visible").remove();
	document.getElementById("buynow").remove();
	document.getElementById("buyout").innerHTML=document.getElementById("buyout").innerHTML+" Thank You For purchasing this Plan, we will mail you your membership card shortly. ";
	}
	else if (window.checkfor==false){
		alert("Please Pick Your Coupon!");
	}

}

function reset(){

window.selectedx-false;
location.reload();
}
