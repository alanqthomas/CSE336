function changeDetails(){
	if(document.frm.l_fname.value==""){
		alert("Please Enter Your First Name.");
		document.frm.l_fname.focus();
		return false;
	}
	if(document.frm.l_lname.value==""){
		alert("Please Enter Your Last Name.");
		document.frm.l_lname.focus();
		return false;
	}
	if(document.frm.l_email.value==""){
		alert("Please Enter Your Email.");
		document.frm.l_email.focus();
		return false;
	}
	if (echeck(document.frm.l_email.value)==false){
		alert("Please enter your valid eMail Id.");
		document.frm.l_email.focus();
		return false
	}
	if(document.getElementById("txt1").value==""){
		alert("Please Enter Your Company");
		document.getElementById("txt1").focus();
		return false;
	}
	if(document.getElementById("country") && document.getElementById("country").value==""){
		alert("Please Select Your Country.");
		document.getElementById("country").focus();
		return false;
	}	
	else{
		var pass =false;
		for(var k=1;k<5;k++){
			if(document.getElementById("interest_"+k).checked==true && pass==false){	
				var pass = true;
				break;
			}
		}
		if(!pass){			
			alert("Please select your interest to attend");
			return false;
		}
		else{
			frm.submit.disabled=true;
			return true;
		}
	}
}

function echeck(str) {
	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	if (str.indexOf(at)==-1){
		return false;
	}
	if(str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr-1){
		return false;
	}
	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr-1){
		return false;
	}
	if (str.indexOf(at,(lat+1))!=-1){
		return false;
	}
	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		return false;
	}
	if (str.indexOf(dot,(lat+2))==-1){
		return false;
	}
	if (str.indexOf(" ")!=-1){
		return false;
	}

	return true;
}

// hard code reset to default css to compensate goog toolbar 3.1.2008 autofill override
if(window.attachEvent)
	window.attachEvent("onload",setListeners);

function setListeners(){
	inputList = document.getElementsByTagName("INPUT");
	for(i=0;i<inputList.length;i++){
		inputList[i].attachEvent("onpropertychange",restoreStyles);
		inputList[i].style.backgroundColor = "";
	}
	selectList = document.getElementsByTagName("SELECT");
	for(i=0;i<selectList.length;i++){
		selectList[i].attachEvent("onpropertychange",restoreStyles);
		selectList[i].style.backgroundColor = "";
	}
}

function restoreStyles(){
	if(event.srcElement.style.backgroundColor != "" && event.srcElement.style.backgroundColor != "#a0d0ff"){
		event.srcElement.style.backgroundColor = "#a0d0ff"; /* color of choice for AutoFill */
		document.all['googleblurb'].style.display = "block";
	}
}
// end of override	

