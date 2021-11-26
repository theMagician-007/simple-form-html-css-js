function formVali() {


    let f = document.fillup;


    var name1 = f.firstname.value;
    var name2 = f.lastname.value;
    var uni = f.universityname.value;
    var cty = f.cname.value;    
    var flag = 0;


    var em = f.Email.value;
    var atpos = em.indexOf("@");
    var dotpos = em.lastIndexOf(".");
    if (em == "" || atpos < 1 || dotpos== -1 || ( dotpos - atpos < 2 ) || em.length - dotpos < 3) {
        var flag = 1;
        alert("Please enter your correct email address!");
        f.Email.focus();
        return;
    }


    var pno = f.phoneno.value.toString();
    if( pno == "" || pno.length != 10 ) {
        var flag = 1;
        alert("Please enter valid phone number!");
        f.phoneno.focus();
        return;
    }



    if (flag == 0) {
        alert('Your details are submitted!');


    }
    return ( true );


}