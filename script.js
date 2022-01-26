// identity.addEventListener('submit',
// function(e){
//     e.preventDefault();
//     var firstname=identity.firstname.value;
//     var middlename=identity.middlename.value;
//     var lastname=identity.lastname.value;
//     var email=identity.email.value;
//     console.log(email)
//     var address=identity.address.value;
//     var password=identity.pswd.value;

//     var error=false;
//     if(firstname==""|| firstname==null){
//         var firstvalue=document.getElementById('form-firstname'); 
//         firstvalue.innerHTML="Firstname is required!";
//         firstvalue.style.color="red";
//         var error=true
//     }
//     if(middlename==""|| middlename==null){
//         var firstvalue=document.getElementById('form-middlename'); 
//         firstvalue.innerHTML="second name is required!";
//         firstvalue.style.color="red";
//         var error=true
//     }
//     if(lastname==""|| lastname==null){
//         var firstvalue=document.getElementById('form-lastname'); 
//         firstvalue.innerHTML="last name is required!";
//         firstvalue.style.color="red";
//         var error=true
//     }
//     if(address=="" || address==null){
//         var secondvalue=document.getElementById("form-address");
//         secondvalue.innerHTML="Address is required!";
//         secondvalue.style.color="red";
//         var error=true;
//     }
//     if(password=="" || password==null){
//         var secondvalue=document.getElementById("form-pswd");
//         secondvalue.innerHTML="password is required!";
//         secondvalue.style.color="red";
//         var error=true;
//     }
//     if(email=="" || email==null){
//         var secondvalue=document.getElementById("form-email");
//         secondvalue.innerHTML="password is required!";
//         secondvalue.style.color="red";
//         var error=true;
//     }
//     if(!error){
//         document.getElementById('name').innerHTML="Name:" +" "+ firstname + " "+ middlename +" " + lastname;
//         document.getElementById("location").innerHTML="Address:"+ " "+ address; 
//         document.getElementById("pswd").innerHTML="Password:" +" "+ password;
//         document.getElementById("mail").innerHTML=innerHTML="Email:" +" "+ email;

//     }
    
   
// })
// identity.addEventListener('submit', function(e){
//     e.preventDefault();
// var firstname=identity.firstname.value;
// var middlename=identity.middlename.value;
// var lastname=identity.lastname.value;
// var location=identity.address.value;
// var error=false;
// function validate(name, firstname, nameerror1){
//     if(firstname=="" || firstname==null){
//     document.getElementById(nameerror1).innerHTML="Your" +" "+ name +" "+ "is required";
//     error=true;
//     }
// }
// if(!error){
//     document.querySelector('#name').innerHTML=firstname+" "+middlename+" "+lastname;
//     document.querySelector('#location').innerHTML=location;
    
// }

//     validate("First Name",firstname, "nameerror1");
//     validate("Middle Name", middlename, "nameerror2");
//     validate("Address", location, "nameerror3");
// });

identity.addEventListener('submit', function(e){
    e.preventDefault();
    var firstname=identity.firstname.value;
    var middlename=identity.middlename.value;
    var lastname=identity.lastname.value;
    var location=identity.address.value;
    var email=identity.email.value;
    var password=identity.pswd.value;
        var error=false;
    function validate(name, firstname, nameerror1){
        if(firstname=="" || firstname==null){
            document.getElementById(nameerror1).innerHTML="Your" +" "+ name +" "+ "is required";
            document.getElementById(nameerror1).style.color="red";
            error=true;

        }
    }
       if( !error){
        document.getElementById('name').innerHTML=firstname+" "+middlename+" "+lastname;
        document.getElementById("location").innerHTML="Address:"+ " "+ location; 
        document.getElementById("pwd").innerHTML="Password:" +" "+ password;
        document.getElementById("mail").innerHTML=innerHTML="Email:" +" "+ email;
       }
       validate("first Name", firstname, "nameerror1");
       validate("Middle Name", middlename, "nameerror2");
       validate("last Name", lastname, "nameerror3");
       validate("address", location, "nameerror4");
       validate("mail", email, "nameerror5");
       validate("password", password, "nameerror6");
});