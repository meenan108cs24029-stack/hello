function submitForm(){
    let name=document.getElementById("name").value;
      let reg=document.getElementById("reg").value;
        let subject=document.getElementById("subject").value;
          let rating=document.getElementById("rating").value;
            let comments=document.getElementById("comments").value;

if(name==""||reg==""||subject==""||rating==""||comments=="")

    {alert("pls fill the above fields");
    return false;
    }

document.getElementById("msg").innerHTML="form submitted successfully";
return false;
}