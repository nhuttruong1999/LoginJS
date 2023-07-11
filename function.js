function check(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
    if (a == "admin" && b == "123"){
        window.location="show.html";
        document.write('Login success');
    }else{
            document.write('Login Fail!');
    }
}
    
