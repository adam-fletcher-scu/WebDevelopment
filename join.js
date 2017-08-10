function set_focus() {
	    joinform.surname.focus();
	}
	
	//define help calls
	function display_contacthelp() {
	alert("You must choose a preferred contact method that we can contact you on. " +
	"\nWhichever method you choose you must ensure you also fill the appropriate contact details below.");
	}
	
	function display_dayphonehelp() {
	alert("Your telephone number must be entered in the format (99) 9999 9999.");
	}
	
	function display_mobphonehelp() {
	alert("Your mobile number must be entered in the format 99 9999 9999.");
	}
	
	function display_emailhelp() {
	alert("A valid email address must contain no more and no less than one @ symbol.");
	}
	
	function display_addresshelp() {
	alert("Address must be in the format of: Number street type. Example 52 Parrot St");
	}
	
	function display_usernamehelp() {
	alert("Your username must be no more than 10 characters.\n No whitespace characters allowed (e.g tab, space, etc.)");
	}
	
	function display_passwordhelp() {
	alert("Your password must be no more than 10 characters. \n It must contain at minimum \n-1 uppercase letter;" +
	"\n-1 lowercase letter;\n-1 number and\n 1 special character. \n It may not contain whitespace (space, tab etc.).");
	}
	
	function display_passwordcheckhelp() {
	alert("To ensure we get your password correct both entries must match identically.");
	}
	
	function check_compulsory(joinform) {
	
	   //initialise user join date and set hidden field value
	   var time = new Date();
	   var month = time.getMonth() + 1;
	   var day = time.getDate();
	   var year = time.getFullYear();
	   joinform.joindate.value = day + "/" + month + "/" + year;
	   	
	   //ensure data entered into surname box
	   if (joinform.surname.value == "") {
	      alert("You must enter your surname!");
		  joinform.surname.focus();
		  return false;
		  }
	   
	   //ensure data entered into othernames box
	   if (joinform.othernames.value == "") {
	      alert("You must enter your other names!");
		  joinform.othernames.focus();
		  return false;
		  }
	   
	   //ensure that the appropriate field is filled out depending upon users radio button selection
	   if (joinform.preferredcontact[0].checked && joinform.dayphone.value == "") {
	      alert("You must enter a landline number.");
		  joinform.dayphone.focus();
		  return false;
		  
		  }
		  
	   if (joinform.preferredcontact[1].checked && joinform.mobphone.value == "") {
	      alert("You must enter a mobile number.");
		  joinform.mobphone.focus();
		  return false;
		  }
		  
	   if (joinform.preferredcontact[2].checked && joinform.email.value == "") {
	      alert("You must enter your email address.");
		  joinform.email.focus();
		  return false;
		  }	   
	   
	   //ensure entered landline is in the correct format 
	   var landnum = joinform.dayphone.value;
	   var oklandnum = landnum.search(/^\(\d{2}\)\s\d{4}\s\d{4}$/);
	   if (joinform.preferredcontact[0].checked && oklandnum != 0) {
	      alert("Please enter your landline number in the format (xx) xxxx xxxx");
		  joinform.dayphone.focus();
		  joinform.dayphone.select();
		  return false;
		  }
		// if entered and not selected as contact method  - make sure it is correct anyways  
	   if (joinform.dayphone.value != ""  && oklandnum != 0) {
	      alert("Please enter your landline number in the format (xx) xxxx xxxx");
		  joinform.dayphone.focus();
		  joinform.dayphone.select();
		  return false;
		  }
		 
       //ensure entered mobile is in the correct format 
	   var mobnum = joinform.mobphone.value;
	   var okmobnum = mobnum.search(/^\d{2}\s\d{4}\s\d{4}$/);
	   if (joinform.preferredcontact[1].checked && okmobnum != 0) {
	      alert("Please enter your mobile number in the format xxxx xxx xxx");
		  joinform.mobphone.focus();
		  joinform.mobphone.select();
		  return false;
		  }
		// if entered and not selected as contact method  - make sure it is correct anyways
	   if (joinform.mobphone.value != ""  && okmobnum != 0) {
	      alert("Please enter your mobile number in the format xx xxxx xxxx");
		  joinform.mobphone.focus();
		  joinform.mobphone.select();
		  return false;
		  }
		  
	   //ensure entered email is valid
	   var email = joinform.email.value;
	   var okemail = email.search(/^([A-Za-z0-9_\-\.]+)\@([A-Za-z0-9_\-\.]+)$/);
	   if (joinform.preferredcontact[2].checked && okemail != 0) {
	      alert("Please enter a valid email address.");
		  joinform.email.focus();
		  joinform.email.select();
		  return false;
		  }
	    // if entered and not selected as contact method  - make sure it is correct anyways
	    if (joinform.email.value != ""  && okemail != 0) {
	      alert("Please enter a valid email address.");
		  joinform.email.focus();
		  joinform.email.select();
		  return false;
		  }	   
	   
	   if (joinform.address1.value == "") {
		  alert("You have to suppy a delivery address for items purchased at Bill Computers. Enter Street and number.");
		  joinform.address1.focus();
		  return false;
		  }
		  
	   if (joinform.address2.value == "") {
		  alert("You have to suppy a delivery address for items purchased at Bill Computers. Enter Suburb and State");
		  joinform.address2.focus();
		  return false;
		  }
		  
	   if (joinform.postcode.value == "") {
		  alert("You must enter your postcode.");		  
		  joinform.postcode.focus();
		  return false;
		  }
		
	   var pcode = joinform.postcode.value;
	   var OKpcode = pcode.search(/^\d{4}$/);
	   if (OKpcode != 0) {
		  alert("Your postcode must be numeric and four digits long.");		  
		  joinform.postcode.focus();
		  joinform.postcode.select();
		  return false;
		  }
		  
      //*********************** Answer for 2nd form (login) next 4 if statements *******************************		   
	   if (joinform.username.value == "") {
	      alert("You must choose a user name!");
		  joinform.username.focus();
		  return false;
		  }
 	  
	   var user = joinform.username.value;
	   var OKuser = user.search(/^\S{6,}$/);
		//looks for not whitespace minimum 6 or more times.
	   if (OKuser != 0) {
	      alert("Your username must be at minimum 6 characters and \ncan't contain whitespace (no spaces, tabs etc.)!");
		  joinform.username.focus();
		  return false;
		  }	
		  
       if (joinform.password.value == "") {
	      alert("You must enter a password for your account.");
		  joinform.password.focus();
		  return false;
		  } 

        //this will be the tough one must have a cap, lowercase, number and special character
		//also must be a minumum of 4 characters max 10 (no whitespace)
	   var passwd = joinform.password.value;
	   var flag1 = passwd.search(/^\S{4,}$/); //look for 4 - 10 characters - not whitespace
       var flag2 = passwd.search(/\d/); //look for a digit if NOT found returns -1
       var flag3 = passwd.search(/[A-Z]/); //look for cap if NOT found returns -1
       var flag4 = passwd.search(/[a-z]/); //look for lowercase if NOT found returns -1
       var flag5 = passwd.search(/\W/); //look for if NOT found returns -1

		// non spaces matches at 0 flags true only if NOT found
	   if (flag1 !=0 || flag2 == -1 || flag3 == -1 || flag4 == -1 || flag5 == -1) {
	      alert("Your password must be no more than 10 characters. \n It must contain at minimum \n-1 uppercase letter;" +
		  "\n-1 lowercase letter;\n-1 number and\n 1 special character. \n It may not contain whitespace (space, tab etc.).");
		  joinform.password.focus();
		  return false;
		  } 	
		  
		//*********************** Answer for 2nd form (login) previous 4 if statements *******************************	
		
       if (joinform.passwordcheck.value == "") {
	      alert("You must reconfirm your password. Just so we know we have it right.");
		  joinform.passwordcheck.focus();
		  return false;
		  }  
	   
	   if (joinform.password.value != joinform.passwordcheck.value) {
		  alert("Your passwords dont match. Please re-enter your password.");
		  joinform.passwordcheck.focus();
		  joinform.passwordcheck.select();
		  return false;
		  }
		  
	  if (joinform.occupation.options[joinform.occupation.selectedIndex].value == "Please Choose") {
	      alert("You must choose an occupation.");
		  joinform.occupation.focus();
		  return false;
		}	   
	   //everything valid submit the form

	   return true;
	}