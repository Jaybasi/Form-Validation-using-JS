 const myForm = document.getElementById("myForm");
 const login = document.getElementById("login");
 const message = document.getElementById("message");
 const errorMsgP = document.getElementById("errorMsgP");
 const errorMsgU = document.getElementById("errorMsgU");

 login.addEventListener("click", function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    
    if ( usernameInput.value.length < 5  ) {
        errorMsgU.style.display = "block";   
        errorMsgP.style.display = 'none';
      message.style.display = "none";
    }
      else if(passwordInput.value.length < 5){
          
        errorMsgP.style.display = "block";
        errorMsgU.style.display = "none";
        message.style.display = "none";

    }
    else{
      message.style.display = "block";
      errorMsgP.style.display = "none";
        errorMsgU.style.display = "none";


      myForm.reset();

      
    }
  });







let eyeicon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-open.png";
    }else{
        password.type = "password";
        eyeicon.src = "eye-closed.png"
    }
}