var validateProfile = function(){
    valid = true;
    if (document.contact.name.value === "") {
     document.getElementById('namealert').innerHTML="*Please enter a name*";
        valid = false;
    }
    if (document.contact.email.value === "") {
     document.getElementById('emailalert').innerHTML="*Please enter a valid email address*";
        valid = false;
    }
    if (document.contact.company.value === "") {
     document.getElementById('companyalert').innerHTML="*Please enter a company*";
        valid = false;
    }
    if (document.contact.timeframe.value === "") {
     document.getElementById('timeframealert').innerHTML="*Please enter a time frame*";
        valid = false;
    }
    if (document.contact.details.value === "") {
     document.getElementById('detailsalert').innerHTML="*Please enter some details*";
        valid = false;
    }
    if(valid){
        
     document.getElementById("form").action = "https://formspree.io/beat0154@algonquinlive.com";
     document.getElementById("form").method = "POST";
        valid = true;
    }

    return valid;
}
//document.getElementById('submit').addEventListener("click", validateProfile);